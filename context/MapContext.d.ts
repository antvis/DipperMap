import React from 'react';
import { Maps } from '../constants';
export interface IProps {
    mapTheme: string;
    setMapTheme: (value: string) => void;
    mapType: Maps;
    setMapType: (value: Maps) => void;
}
export declare const MapModelContext: React.Context<IProps>;
declare const Consumer: React.Consumer<IProps>;
export { Consumer };
declare const MapContext: React.FC;
export default MapContext;
