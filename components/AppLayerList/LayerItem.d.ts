import React from 'react';
import type { IDataset, ILayer } from '../../typings';
export interface ILayerConfig {
    layer: ILayer;
    dataset: IDataset;
    data: any[];
}
interface IProps {
    config: ILayerConfig;
}
declare const LayerItem: React.FC<IProps>;
export default LayerItem;
