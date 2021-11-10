import type { ILayer, IDataset, ILayerType } from '../typings';
declare const useLayer: () => {
    addLayer: (dataset: IDataset) => ILayer;
    copyLayer: (filter: ILayer) => ILayer;
    getDefaultConfig: (type: ILayerType) => any;
};
export default useLayer;
