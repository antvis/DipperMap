import type { IEntity } from './common';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';

export type ILayerType = 'point' | 'line' | 'trip' | 'polygon' | 'hex' | 'heat';

export type IBlendType =
  | 'normal'
  | 'additive'
  | 'subtractive'
  | 'min'
  | 'max'
  | 'none';

export type PropsType = Omit<ILayerProps, 'source'>;

export type IColorType = 'sequential' | 'singlehue' | 'diverging';

export interface IBaseLayer extends IEntity {
  type: ILayerType;
  config: Record<string, any>;
  visible: boolean;
  zIndex: number;
}

export interface ILayerRange {
  value: number;
  rangeValue: [number, number];
  field?: string | null;
}

export interface ILayerIDimension {
  rangeValue: [number, number];
  field: string | null;
}

export interface ILayerSingleColor {
  value: string;
  field?: null;
  enable?: boolean;
}

export interface ILayerDoubleColor {
  value: [string, string];
  field?: null;
  enable?: boolean;
}

export interface ILayerFieldColor {
  // value: string[];
  colorReverse: boolean;
  colorType: IColorType;
  colorIndex: number;
  field: string;
  enable?: boolean;
}

export type ILayerDimensionType =
  | 'fill'
  | 'extrude'
  | 'hexagonColumn'
  | 'hexagon'
  | 'heatmap'
  | 'heatmap3D'
  | 'cylinder'
  | 'circle';

export interface IPointLayerConfig {
  lngField?: string | null;
  latField?: string | null;
  magField?: string;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  borderColor: ILayerSingleColor;
  radius: ILayerRange;
  blendType: IBlendType;
  opacity: number;
  size: number;
  shape: ILayerDimensionType;
  dimension: ILayerIDimension;
}

export type ILineLayerLineType = 'line' | 'arc' | 'arc3d';
export type IHeatLayerType =
  | 'heatmap'
  | 'heatmap3D'
  | 'hexagonColumn'
  | 'hexagon'
  | 'circle'
  | 'square';

export type BundlingConfig = {
  compatibility: number;
};
export interface ILineLayerConfig {
  lineType: ILineLayerLineType;
  startLngField?: string | null;
  startLatField?: string | null;
  endLngField?: string | null;
  endLatField?: string | null;
  color: ILayerDoubleColor | ILayerFieldColor;
  lineWidth: ILayerRange;
  blendType: IBlendType;
  edgeBundling: BundlingConfig;
  enableEdgeBundling: boolean;
  opacity: number;
}

export interface IPolygonLayerConfig {
  geoField?: string | null;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  borderColor: ILayerSingleColor | ILayerFieldColor;
  borderWidth: ILayerRange;
  blendType: IBlendType;
  opacity: number;
  dimension: ILayerIDimension;
  intense: number;
  intenseField?: string | null;
  shape: ILayerDimensionType;
}

export interface ITripLayerConfig {
  geoField?: string | null;
  color: ILayerDoubleColor | ILayerFieldColor;
  lineWidth: ILayerRange;
  blendType: IBlendType;
  opacity: number;
}

export interface IHeatLayerConfig {
  lngField?: string | null;
  latField?: string | null;
  magField?: string | null;
  shape: IHeatLayerType;
  fillColor: Omit<ILayerFieldColor, 'field'>;
  ranges: [number, number];
  blendType: IBlendType;
  opacity: number;
  radius: number;
  intensity: number;
  dimension: ILayerIDimension;
}

export interface IHexLayerConfig {
  hexId?: string | null;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  blendType: IBlendType;
  opacity: number;
  dimension: ILayerIDimension;
}
export interface IPointLayer extends IBaseLayer {
  type: 'point';
  config: IPointLayerConfig;
}

export interface ILineLayer extends IBaseLayer {
  type: 'line';
  config: ILineLayerConfig;
}

export interface IPolygonLayer extends IBaseLayer {
  type: 'polygon';
  config: IPolygonLayerConfig;
}

export interface ITripLayer extends IBaseLayer {
  type: 'trip';
  config: ITripLayerConfig;
}

export interface IHexLayer extends IBaseLayer {
  type: 'hex';
  config: IHexLayerConfig;
}

export interface IHeatLayer extends IBaseLayer {
  type: 'heat';
  config: IHeatLayerConfig;
}

export type ILayer =
  | IPointLayer
  | ILineLayer
  | IPolygonLayer
  | ITripLayer
  | IHexLayer
  | IHeatLayer;
