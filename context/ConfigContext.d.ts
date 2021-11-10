import React from 'react';
import { IFilter, IInteractive, ILayer } from '../typings';
export interface IProps {
    layerList: ILayer[];
    setLayerList: (value: ILayer[]) => void;
    filterList: IFilter[];
    setFilterList: (value: IFilter[]) => void;
    interactiveList: IInteractive[];
    setInteractiveList: (value: IInteractive[]) => void;
}
export declare const ConfigModelContext: React.Context<IProps>;
declare const Consumer: React.Consumer<IProps>;
export { Consumer };
declare const MapContext: React.FC;
export default MapContext;
