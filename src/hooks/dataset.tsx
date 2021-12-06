import React, { CSSProperties } from 'react';
import type { IDataset, IDatasetDownloadType, IDatasetField } from '../typings';
import {
  downloadFile,
  generateUnRepeatValue,
  getRandomId,
} from '../utils/tools';
import { useCallback, useContext } from 'react';
import { DatasetModelContext } from '../context/DatasetContext';
import papaparse from 'papaparse';
import { message } from 'antd';
import { DATASET_COLOR_LIST } from '../constants';
import { pullAll } from 'lodash';

const useDataset = () => {
  const { datasetList, setDatasetList } = useContext(DatasetModelContext);

  const getNewDatasetName = useCallback(() => {
    return generateUnRepeatValue<IDataset, string>(
      datasetList,
      'name',
      '数据源',
    );
  }, [datasetList]);

  const getNewMarkColor = useCallback(() => {
    const usedColorList = datasetList
      .map((dataset) => dataset.markColor)
      .filter((item) => !!item) as string[];

    const freeMarkColor = pullAll([...DATASET_COLOR_LIST], usedColorList);
    if (freeMarkColor.length) {
      return freeMarkColor[0];
    }
    return `#${Math.floor(Math.random() * 256 * 256 * 256).toString(16)}`;
  }, [datasetList]);

  // @ts-ignore
  const addDataset: (params: Partial<IDataset> & { data: any[] }) => IDataset =
    useCallback(
      (params: IDataset) => {
        return {
          ...params,
          id: params.id,
          // id: getRandomId('dataset'),
          type: 'json',
          order: datasetList.length + 1,
          createTime: Date.now(),
          name: params.name || getNewDatasetName(),
          markColor: getNewMarkColor(),
        } as IDataset;
      },
      [datasetList, getNewDatasetName],
    );

  const copyDataset = useCallback(
    (dataset: IDataset) => {
      const newDataset: IDataset = {
        ...dataset,
        id: getRandomId('dataset'),
        name: getNewDatasetName(),
        order: datasetList.length + 1,
        createTime: Date.now(),
        markColor: getNewMarkColor(),
      };

      setDatasetList([...datasetList, newDataset]);
      message.success('复制成功');
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

  const downloadDataset = useCallback(
    (dataset: IDataset, type: IDatasetDownloadType = 'json') => {
      const content =
        type === 'json'
          ? JSON.stringify(dataset.data, null, 2)
          : papaparse.unparse(dataset.data, {
              newline: '\n',
            });
      const blob = new Blob([content]);
      downloadFile(
        URL.createObjectURL(blob),
        false,
        type === 'json' ? 'data.json' : 'data.csv',
      );
    },
    [],
  );

  const getDatasetMarkStyle = useCallback(
    (datasetId?: string | null) => {
      let color = 'rgba(0, 0, 0, 0)';
      if (datasetId) {
        const target = datasetList.find((item) => item.id === datasetId);
        if (target) {
          color = target.markColor ?? getNewMarkColor();
        }
      }
      const style: CSSProperties = {
        borderLeft: `2px solid ${color}`,
      };
      return style;
    },
    [datasetList],
  );

  return {
    addDataset,
    getNewDatasetName,
    copyDataset,
    getTargetDataset,
    downloadDataset,
    getDatasetMarkStyle,
  };
};

export default useDataset;
