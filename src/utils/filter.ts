import type { IDataset, IFilter, INumberFilter, IStringFilter } from '../typings';
import md5 from 'md5';
import { getDBStore, setDBStore } from './indexdb';

const getFiltersKey = (filters: IFilter[]) => {
  return md5(
    JSON.stringify(
      filters
        .map((item) => ({
          field: item.field.name as string,
          value: item.value,
        }))
        .sort((a, b) => a.field.localeCompare(b.field)),
    ),
  );
};

export const filterData = async (dataset: IDataset, filters: IFilter[]) => {
  const storeKey = getFiltersKey(filters);
  const filterDataObj = await getDBStore<Record<string, any[]>>('FILTERED_DATASET') ?? {};
  const targetData = filterDataObj[storeKey];
  if (targetData) {
    return targetData;
  }

  const computedResult = dataset.data.filter((item) => {
    return filters.every((filter) => {
      const { name } = filter.field;
      if (filter.field.type === 'string') {
        const { value } = filter as IStringFilter;
        if (!value.length) {
          return true;
        }
        return value.includes(item[name]);
      }
      if (filter.field.type === 'number') {
        const [min, max] = (filter as INumberFilter).value;
        return item[name] >= min && item[name] <= max;
      }
      if (filter.field.type === 'boolean') {
        return item[name] === filter.value;
      }
      return true;
    });
  });

  if (!targetData) {
    setDBStore('FILTERED_DATASET', {
      ...filterDataObj,
      [storeKey]: computedResult,
    });
  }

  return computedResult;
};
