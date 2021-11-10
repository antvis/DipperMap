import type { IFilter, IDataset } from '../typings';
declare const useFilter: () => {
    addFilter: (dataset: IDataset) => IFilter;
    copyFilter: (filter: IFilter) => IFilter;
};
export default useFilter;
