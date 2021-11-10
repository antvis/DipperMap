import type { ILayer, ILayerDoubleColor, ILayerFieldColor, ILayerSingleColor, ILayerRange } from '../../typings';
import type { ISourceOptions } from '@antv/l7-react/es/component/LayerAttribute';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';
export declare const getPointList: (coordinates: string) => number[][];
export declare const transformSource: (layer: ILayer, data: any[]) => ISourceOptions;
export declare const setColorProps: (props: Partial<ILayerProps>, colorConfig: ILayerSingleColor | ILayerDoubleColor | ILayerFieldColor) => void;
export declare const setSizeProps: (props: Partial<ILayerProps>, sizeConfig: ILayerRange) => void;
export declare const transformProps: (layer: ILayer) => Omit<ILayerProps, 'source'>[];
