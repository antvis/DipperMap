import type { IDataset, IDatasetField } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils/tools';
import { useCallback, useContext } from 'react';
import papaparse from 'papaparse';
import { message } from 'antd';
import { DatasetModelContext } from '@/context/DatasetContext';

const useDataset = () => {
  const { datasetList, setDatasetList } = useContext(DatasetModelContext);

  const getNewDatasetName = useCallback(() => {
    return generateUnRepeatValue<IDataset, string>(
      datasetList,
      'name',
      '数据源',
    );
  }, [datasetList]);

  const addDataset: (
    params: Partial<IDataset> & { data: any[] },
  ) => Promise<IDataset> = useCallback(
    async (params: IDataset) => {
      const newDataset: IDataset = {
        ...params,
        id: getRandomId('dataset'),
        type: 'json',
        order: datasetList.length + 1,
        createTime: Date.now(),
        name: params.name || getNewDatasetName(),
      };
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

  const transformData = useCallback((content: string | any[]) => {
    let result: any[] = [];
    let isCSV = false;

    const fields: IDatasetField[] = [];
    if (Array.isArray(content)) {
      result = content;
    } else {
      try {
        if (content.startsWith('[') && content.endsWith(']')) {
          result = JSON.parse(content);
        } else {
          result =
            papaparse.parse(content, { header: true, skipEmptyLines: true })
              .data ?? [];
          isCSV = true;
        }
      } catch (e) {
        message.error('数据解析有误');
      }
    }
    if (result.length) {
      const firstRow = result[0];
      Object.keys(firstRow).forEach((key) => {
        const value = firstRow[key];
        if (
          typeof value === 'number' ||
          (/^(-?\d+)(\.\d+)?$/.test(String(value)) && !Number.isNaN(+value))
        ) {
          // fields.push({
          //   type: 'number',
          //   name: ''
          // })
        }
      });
    }
    return [];
  }, []);

  return {
    addDataset,
    getNewDatasetName,
    transformData,
    copyDataset,
    getTargetDataset,
  };
};

export default useDataset;
