import type { IDataset, IDatasetField } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils/tools';
import { useCallback, useContext } from 'react';
import { DatasetModelContext } from '../context/DatasetContext';

const useDataset = () => {
  const { datasetList, setDatasetList } = useContext(DatasetModelContext);

  const getNewDatasetName = useCallback(() => {
    return generateUnRepeatValue<IDataset, string>(
      datasetList,
      'name',
      '数据源',
    );
  }, [datasetList]);

  // @ts-ignore
  const addDataset: (
    params: Partial<IDataset> & { data: any[] },
  ) => Promise<IDataset> = useCallback(
    async (params: IDataset) => {
      const newDataset = {
        ...params,
        id: params.id,
        // id: getRandomId('dataset'),
        type: 'json',
        order: datasetList.length + 1,
        createTime: Date.now(),
        name: params.name || getNewDatasetName(),
      } as IDataset;
      setDatasetList([...datasetList, newDataset]);
      return newDataset;
    },
    [datasetList, getNewDatasetName, setDatasetList],
  );

  const copyDataset = useCallback(
    (dataset: IDataset) => {
      const newDataset: IDataset = {
        ...dataset,
        id: getRandomId('dataset'),
        name: getNewDatasetName(),
        order: datasetList.length + 1,
        createTime: Date.now(),
      };

      setDatasetList([...datasetList, newDataset]);

      return newDataset;
    },
    [datasetList, getNewDatasetName, setDatasetList],
  );

  const getTargetDataset = useCallback(
    (datasetId?: string | null) => {
      if (!datasetId) {
        return null;
      }
      return datasetList.find((dataset) => dataset.id === datasetId) ?? null;
    },
    [datasetList],
  );

  const getNewDatasetFields: (data: any[]) => IDatasetField[] = useCallback(
    (data) => {
      if (!data.length) {
        return [];
      }
      const firstData = data[0];
      return Object.entries(firstData).map(([name, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
          const values = data.map((item) => item[name]);
          const uniqueValues = Array.from(new Set(values));
          if (typeof value === 'string') {
            return {
              type: 'string',
              name,
              values,
              uniqueValues,
            };
          }
          return {
            type: 'number',
            name,
            values,
            uniqueValues,
            range: [Math.min(...values), Math.max(...values)],
          };
        }
        return {
          type: 'boolean',
          name,
        };
      });
    },
    [],
  );

  return {
    addDataset,
    getNewDatasetName,
    copyDataset,
    getTargetDataset,
  };
};

export default useDataset;
