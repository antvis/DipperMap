import React, { createContext, useEffect, useMemo, useState } from 'react';
import { IDataset } from '@/typings';
import { getDBStore, setDBStore } from '../utils';
import { useDebounceEffect } from 'ahooks';

export interface IProps {
  datasetList: IDataset[];
  setDatasetList: (value: IDataset[]) => void;
  selectDatasetId: string | null;
  setSelectDatasetId: (value: string | null) => void;
  selectDataset?: IDataset | null;
}

// @ts-ignore
export const DatasetModelContext = createContext<IProps>();

const { Provider, Consumer } = DatasetModelContext;

export { Consumer };

const DatasetContext: React.FC = ({ children }) => {
  const [datasetList, setDatasetList] = useState<IDataset[]>([]);
  const [selectDatasetId, setSelectDatasetId] = useState<string | null>(null);

  useEffect(() => {
    getDBStore<IDataset[]>('DATASET_LIST').then((newDatasetList) => {
      setDatasetList(newDatasetList ?? []);
    });
  }, []);

  useDebounceEffect(
    () => {
      setDBStore<IDataset[]>('DATASET_LIST', datasetList ?? []);
    },
    [datasetList],
    {
      wait: 500,
    },
  );

  const selectDataset = useMemo(() => {
    if (!selectDatasetId) {
      return null;
    }
    return datasetList.find((item) => item.id === selectDatasetId);
  }, [selectDatasetId, datasetList]);

  return (
    <Provider
      value={{
        datasetList,
        setDatasetList,
        selectDatasetId,
        setSelectDatasetId,
        selectDataset,
      }}
    >
      {children}
    </Provider>
  );
};

export default DatasetContext;
