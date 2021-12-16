import type {
  IDataset,
  IFilter,
  INumberFilter,
  IStringFilter,
} from '../typings';
import md5 from 'md5';
import { getDBStore, setDBStore } from './indexdb';
import { isEqual } from 'lodash';
import { getFilterRange } from './tools';

/**
 * 获取dataset和filters的唯一映射值
 * @param dataset
 * @param filters
 */
const getFiltersKey = (dataset: IDataset, filters: IFilter[]) => {
  return md5(
    JSON.stringify({
      datasetId: dataset.id,
      filters: filters
        .filter((item) => item.enable)
        .map((item) => ({
          field: item.field.name as string,
          value: item.value,
        }))
        .sort((a, b) => a.field.localeCompare(b.field)),
    }),
  );
};

export const filterData = async (dataset: IDataset, filters: IFilter[]) => {
  const storeKey = getFiltersKey(dataset, filters);
  const filterDataObj =
    (await getDBStore<Record<string, any[]>>('FILTERED_DATASET')) ?? {};
  const targetData = filterDataObj[storeKey];
  if (targetData) {
    return targetData;
  }

  // 去除无用的filter
  const usableFilters = filters.filter((filter) => {
    if (filter.field.type === 'number') {
      const {
        value,
        field: { range },
      } = filter as INumberFilter;
      if (range[0] === range[1]) {
        return false;
      }
      return !isEqual(value, getFilterRange(filter.field.range));
    }
    if (filter.field.type === 'string') {
      const { value } = filter as IStringFilter;
      if (!value.length) {
        return false;
      }
      return value.length !== filter.field.uniqueValues.length;
    }
    return true;
  });

  const computedResult = dataset.data.filter((item) => {
    return usableFilters.every((filter) => {
      const { name } = filter.field;
      if (filter.field.type === 'string') {
        const { value } = filter as IStringFilter;
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
