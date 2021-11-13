import type {
  ILineLayerLineType,
  IOption,
  IDatasetFieldType,
  IHexLayerConfig,
  ILayerType,
  ILineLayerConfig,
  IPointLayerConfig,
  IPolygonLayerConfig,
  ITripLayerConfig,
  IMapType,
  IMapTheme,
  IBlendType,
  IHeatLayerConfig,
} from '../typings';

export const DEFAULT_COLOR1 = '#1890ff';
export const DEFAULT_COLOR2 = '#FF5627';

export const POINT_TO_SQUARE_LIMIT = 50000;

export const MAPBOX_THEME_LIST: IOption<IMapTheme>[] = [
  {
    label: '幻影黑',
    value: 'dark',
  },
  {
    label: '标准',
    value: 'normal',
  },
  {
    label: '月光银',
    value: 'light',
  },
];
export const MAP_THEME_LIST: IOption<IMapTheme>[] = [
  {
    label: '幻影黑',
    value: 'dark',
  },
  {
    label: '标准',
    value: 'normal',
  },
  {
    label: '月光银',
    value: 'light',
  },
  {
    label: '远山黛',
    value: 'whitesmoke',
  },
  {
    label: '草色青',
    value: 'fresh',
  },
  {
    label: '雅士灰',
    value: 'grey',
  },
  {
    label: '涂鸦',
    value: 'graffiti',
  },
  {
    label: '马卡龙',
    value: 'macaron',
  },
  {
    label: '靛青蓝',
    value: 'blue',
  },
  {
    label: '极夜蓝',
    value: 'darkblue',
  },
  {
    label: '酱籽',
    value: 'wine',
  },
];

export const MAP_TYPES: IOption<IMapType>[] = [
  {
    label: '高德',
    value: 'amap',
    tooltip: '国内经纬度坐标系',
  },
  {
    label: 'MapBox',
    value: 'mapbox',
    tooltip: '国外经纬度坐标系',
  },
];

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

export const LOCAL_STORAGE_KEY = {
  MAP_THEME: 'DIPPER_VIEW_MAP_THEME',
  MAP_TYPE: 'DIPPER_VIEW_MAP_TYPE',
  TOP_PANEL_HEIGHT: 'DIPPER_VIEW_TOP_PANEL_HEIGHT',
};

export const DATASET_FIELD_TYPE_COLOR: Record<IDatasetFieldType, string> = {
  string: 'green',
  number: 'gold',
  boolean: 'blue',
};

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
    value: 'arcmini',
  },
];

export const DEFAULT_POINT_LAYER_CONFIG: IPointLayerConfig = {
  lngField: null,
  latField: null,
  fillColor: {
    value: DEFAULT_COLOR1,
    enable: true,
  },
  borderColor: {
    value: DEFAULT_COLOR1,
  },
  radius: {
    value: 3,
    rangeValue: [1, 10],
    field: null,
  },
  blendType: 'additive',
  opacity: 100,
};

export const DEFAULT_LINE_LAYER_CONFIG: ILineLayerConfig = {
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
    field: null,
  },
  borderColor: {
    value: DEFAULT_COLOR1,
    field: null,
  },
  borderWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null,
  },
  blendType: 'normal',
  opacity: 100,
};

export const DEFAULT_HEX_LAYER_CONFIG: IHexLayerConfig = {
  hexId: null,
  fillColor: {
    value: DEFAULT_COLOR1,
    field: null,
  },
  blendType: 'normal',
  opacity: 100,
};

export const DEFAULT_HEAT_LAYER_CONFIG: IHeatLayerConfig = {
  fillColor: {
    value: DEFAULT_COLOR1,
    field: null,
  },
  magField: '',
  ranges: [0, 1],
  blendType: 'normal',
  opacity: 100,
};
