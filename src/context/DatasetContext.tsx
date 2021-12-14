import React, { createContext, useEffect, useMemo, useState } from 'react';
import { IDataset } from '../typings';
import useIndexDBHook from '../hooks/indexdb';

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

const DatasetContextProvider: React.FC = ({ children }) => {
  const [datasetList, setDatasetList] = useState<IDataset[]>([]);
  const [selectDatasetId, setSelectDatasetId] = useState<string | null>(null);

  useIndexDBHook(datasetList, setDatasetList, 'DATASET_LIST', []);

  const selectDataset = useMemo(() => {
    if (!selectDatasetId) {
      return null;
    }
    return datasetList.find((item) => item.id === selectDatasetId);
  }, [selectDatasetId, datasetList]);

  useEffect(() => {
    if (
      selectDatasetId &&
      !datasetList.find((dataset) => dataset.id === selectDatasetId)
    ) {
      setSelectDatasetId(null);
    }
  }, [datasetList, selectDatasetId]);

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

export default DatasetContextProvider;
