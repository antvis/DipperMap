import type { IFilter, IDataset } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils/tools';
import { useModel } from '@alipay/bigfish';
import { useCallback } from 'react';
import { cloneDeep } from 'lodash';

const useFilter = () => {
  const { filterList, setFilterList } = useModel('config');

  const addFilter: (dataset: IDataset) => IFilter = useCallback(
    (dataset) => {
      const { id, fields } = dataset;
      const newFilter: IFilter = {
        id: getRandomId('filter'),
        name: generateUnRepeatValue<IFilter, string>(filterList, 'name', '筛选器'),
        order: filterList.length + 1,
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
        name: generateUnRepeatValue<IFilter, string>(filterList, 'name', '筛选器'),
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
