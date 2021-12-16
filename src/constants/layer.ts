import {
  IBlendType,
  IHeatLayerConfig,
  IHeatLayerType,
  IHexLayerConfig,
  ILayerDimensionType,
  ILayerType,
  ILineLayerConfig,
  ILineLayerLineType,
  IOption,
  IPointLayerConfig,
  IPolygonLayerConfig,
  ITripLayerConfig,
} from '../typings';
import { DEFAULT_COLOR1, DEFAULT_COLOR2 } from './color';

export const LAYER_POINT_HEIGHT_RANGE: [number, number] = [1, 390];

export const LAYER_POLYGON_HEIGHT_RANGE: [number, number] = [1, 400000000000];

export const LAYER_SLIDER_RANGE = [1, 100];

export const DEFAULT_HEIGHT_VALUE = Math.floor(
  (LAYER_SLIDER_RANGE[1] + LAYER_SLIDER_RANGE[0]) / 2,
);

export const POINT_TO_SQUARE_LIMIT = 50000;

export const BLEND_TYPE_LIST: IOption<IBlendType>[] = [
  {
    label: '正常',
    value: 'normal',
  },
  {
    label: '叠加',
    value: 'additive',
  },
  {
    label: '相减',
    value: 'subtractive',
  },
  {
    label: '最大值',
    value: 'max',
  },
  {
    label: '最小值',
    value: 'min',
  },
  {
    label: '无',
    value: 'none',
  },
];

export const POLYGON_TYPE_LIST: IOption<ILayerDimensionType>[] = [
  {
    label: '2D',
    value: 'fill',
  },
  {
    label: '3D',
    value: 'extrude',
  },
];

export const POINT_TYPE_LIST: IOption<ILayerDimensionType>[] = [
  {
    label: '2D点图',
    value: 'circle',
  },
  {
    label: '3D柱图',
    value: 'cylinder',
  },
];

export const HEX_TYPE_LIST: IOption<ILayerDimensionType>[] = [
  {
    label: '2D',
    value: 'hexagon',
  },
  {
    label: '3D',
    value: 'hexagonColumn',
  },
];

export const HEATMAP_TYPE_LIST: IOption<ILayerDimensionType>[] = [
  {
    label: '2D',
    value: 'heatmap',
  },
  {
    label: '3D',
    value: 'heatmap3D',
  },
];

export const LAYER_TYPE_LIST: IOption<ILayerType>[] = [
  {
    label: '点(Point)',
    value: 'point',
  },
  {
    label: '线(Line)',
    value: 'line',
  },
  {
    label: '路径(Trip)',
    value: 'trip',
  },
  {
    label: '多边形(Polygon)',
    value: 'polygon',
  },
  {
    label: '六边形(Hex)',
    value: 'hex',
  },
  {
    label: '热力(Heat)',
    value: 'heat',
  },
];

export const LINE_TYPE_LIST: IOption<ILineLayerLineType>[] = [
  {
    label: '直线',
    value: 'line',
  },
  {
    label: '曲线',
    value: 'arc',
  },
  {
    label: '3D曲线',
    value: 'arc3d',
  },
];

export const HEAT_TYPE_LIST: IOption<IHeatLayerType>[] = [
  {
    label: '热力2D',
    value: 'heatmap',
  },
  {
    label: '热力3D',
    value: 'heatmap3D',
  },
];

export const DEFAULT_POINT_LAYER_CONFIG: IPointLayerConfig = {
  lngField: null,
  latField: null,
  fillColor: {
    value: DEFAULT_COLOR1,
  },
  borderColor: {
    value: DEFAULT_COLOR1,
  },
  radius: {
    value: 3,
    rangeValue: [1, 10],
    field: null,
  },
  blendType: 'normal',
  opacity: 100,
  shape: 'circle',
  size: DEFAULT_HEIGHT_VALUE,
  dimension: {
    rangeValue: [1, 100],
    field: null,
  },
};

export const DEFAULT_LINE_LAYER_CONFIG: ILineLayerConfig = {
  edgeBundling: {
    compatibility: 4,
  },
  enableEdgeBundling: false,
  startLngField: null,
  startLatField: null,
  endLngField: null,
  endLatField: null,
  lineType: 'line',
  lineWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null,
  },
  color: {
    value: [DEFAULT_COLOR1, DEFAULT_COLOR2],
  },
  blendType: 'additive',
  opacity: 100,
};

export const DEFAULT_TRIP_LAYER_CONFIG: ITripLayerConfig = {
  geoField: null,
  color: {
    value: [DEFAULT_COLOR1, DEFAULT_COLOR2],
    field: null,
  },
  lineWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null,
  },
  blendType: 'additive',
  opacity: 100,
};

export const DEFAULT_POLYGON_LAYER_CONFIG: IPolygonLayerConfig = {
  geoField: null,
  fillColor: {
    value: DEFAULT_COLOR1,
  },
  borderColor: {
    value: DEFAULT_COLOR1,
  },
  borderWidth: {
    value: 1,
    rangeValue: [1, 10],
  },
  blendType: 'normal',
  opacity: 100,
  dimension: {
    rangeValue: [1, 100],
    field: null,
  },
  intense: DEFAULT_HEIGHT_VALUE,
  intenseField: null,
  shape: 'fill',
};

export const DEFAULT_HEX_LAYER_CONFIG: IHexLayerConfig = {
  hexId: null,
  fillColor: {
    value: DEFAULT_COLOR1,
    field: null,
  },
  blendType: 'normal',
  opacity: 100,
  dimension: {
    rangeValue: [1, 100],
    field: null,
  },
};

export const DEFAULT_HEAT_LAYER_CONFIG: IHeatLayerConfig = {
  shape: 'heatmap',
  lngField: null,
  latField: null,
  magField: null,
  fillColor: {
    colorType: 'sequential',
    colorIndex: 0,
    colorReverse: false,
  },
  radius: 20,
  ranges: [0, 1],
  blendType: 'normal',
  opacity: 100,
  intensity: DEFAULT_HEIGHT_VALUE,
  dimension: {
    rangeValue: [1, 100],
    field: null,
  },
};
