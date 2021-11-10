import React from 'react';
import { IDataset } from '../typings';
export interface IProps {
    datasetList: IDataset[];
    setDatasetList: (value: IDataset[]) => void;
    selectDatasetId: string | null;
    setSelectDatasetId: (value: string | null) => void;
    selectDataset?: IDataset | null;
}
export declare const DatasetModelContext: React.Context<IProps>;
declare const Consumer: React.Consumer<IProps>;
export { Consumer };
declare const DatasetContext: React.FC;
export default DatasetContext;
