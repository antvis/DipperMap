import type { IDataset } from '../typings';
declare const useDataset: () => {
    addDataset: (params: Partial<IDataset> & {
        data: any[];
    }) => Promise<IDataset>;
    getNewDatasetName: () => string;
    copyDataset: (dataset: IDataset) => IDataset<Record<string, any>>;
    getTargetDataset: (datasetId?: string | null | undefined) => IDataset<Record<string, any>> | null;
};
export default useDataset;
