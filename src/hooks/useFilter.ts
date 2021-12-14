import type { IFilter, IDataset } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils/tools';
import { useCallback, useContext } from 'react';
import { cloneDeep } from 'lodash';
import { FilterModelContext } from '../context/FilterContext';

const useFilter = () => {
  const { filterList, setFilterList } = useContext(FilterModelContext);

  const addFilter: (dataset: IDataset) => IFilter = useCallback(
    (dataset) => {
      const { id, fields } = dataset;
      const newFilter: IFilter = {
        id: getRandomId('filter'),
        name: generateUnRepeatValue<IFilter, string>(
          filterList,
          'name',
          '筛选器',
        ),
        order: filterList.length + 1,
        // @ts-ignore
        field: null,
        datasetId: id,
        value: [],
        enable: true,
        createTime: Date.now(),
      };
      if (fields.length) {
        [newFilter.field] = fields;
      }
      const newFilterList = [...filterList, newFilter];
      setFilterList(newFilterList);
      return newFilter;
    },
    [filterList, setFilterList],
  );

  const copyFilter = useCallback(
    (filter: IFilter) => {
      const newFilter: IFilter = {
        ...cloneDeep(filter),
        id: getRandomId('dataset'),
        name: generateUnRepeatValue<IFilter, string>(
          filterList,
          'name',
          '筛选器',
        ),
        order: filterList.length + 1,
        createTime: Date.now(),
      };

      setFilterList([...filterList, newFilter]);

      return newFilter;
    },
    [filterList, setFilterList],
  );

  return {
    addFilter,
    copyFilter,
  };
};

export default useFilter;
