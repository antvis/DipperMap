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
  ILayerDimensionType,
  IHeatLayerType,
  IColorType,
} from '../typings';
import { GeometryTypes } from '@turf/turf';

export const HELP_LINK_LIST = [
  {
    title: '帮助文档',
    url: 'https://antv.vision/DipperMap/',
  },
  {
    title: '问题反馈',
    url: 'https://github.com/antvis/DipperMap/issues',
  },
  {
    title: '官方网站',
    url: 'https://dippermap.alipay.com/',
  },
];

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

export const GEO_TO_LAYER_TYPE_MAP: Partial<Record<GeometryTypes, ILayerType>> =
  {
    Point: 'point',
    LineString: 'trip',
    Polygon: 'polygon',
    MultiPoint: 'point',
    MultiLineString: 'trip',
    MultiPolygon: 'polygon',
  };

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

export const LOCAL_STORAGE_KEY = {
  MAP_THEME: 'DIPPER_VIEW_MAP_THEME',
  MAP_TYPE: 'DIPPER_VIEW_MAP_TYPE',
  TOP_PANEL_HEIGHT: 'DIPPER_VIEW_TOP_PANEL_HEIGHT',
  MAP_PITCH: 'DIPPER_VIEW_MAP_PITCH',
  MAP_ROTATE: 'DIPPER_VIEW_MAP_ROTATE',
  DATASET_PANEL_HEIGHT: 'DIPPER_VIEW_DATASET_PANEL_HEIGHT',
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
  size: 100,
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
  intense: 10000,
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
  },
  radius: 20,
  ranges: [0, 1],
  blendType: 'normal',
  opacity: 100,
  intensity: 2,
  dimension: {
    rangeValue: [1, 100],
    field: null,
  },
};

export const FIELD_COLOR_MAP: Record<IColorType, string[][]> = {
  sequential: [
    [
      'rgb(247, 251, 255)',
      'rgb(222, 235, 247)',
      'rgb(198, 219, 239)',
      'rgb(158, 202, 225)',
      'rgb(107, 174, 214)',
      'rgb(66, 146, 198)',
      'rgb(33, 113, 181)',
      'rgb(8, 81, 156)',
      'rgb(8, 48, 107)',
    ],
    [
      'rgb(247, 252, 253)',
      'rgb(229, 245, 249)',
      'rgb(204, 236, 230)',
      'rgb(153, 216, 201)',
      'rgb(102, 194, 164)',
      'rgb(65, 174, 118)',
      'rgb(35, 139, 69)',
      'rgb(0, 109, 44)',
      'rgb(0, 68, 27)',
    ],
    [
      'rgb(247, 252, 253)',
      'rgb(224, 236, 244)',
      'rgb(191, 211, 230)',
      'rgb(158, 188, 218)',
      'rgb(140, 150, 198)',
      'rgb(140, 107, 177)',
      'rgb(136, 65, 157)',
      'rgb(129, 15, 124)',
      'rgb(77, 0, 75)',
    ],
    [
      'rgb(247, 252, 240)',
      'rgb(224, 243, 219)',
      'rgb(204, 235, 197)',
      'rgb(168, 221, 181)',
      'rgb(123, 204, 196)',
      'rgb(78, 179, 211)',
      'rgb(43, 140, 190)',
      'rgb(8, 104, 172)',
      'rgb(8, 64, 129)',
    ],
    [
      'rgb(255, 247, 236)',
      'rgb(254, 232, 200)',
      'rgb(253, 212, 158)',
      'rgb(253, 187, 132)',
      'rgb(252, 141, 89)',
      'rgb(239, 101, 72)',
      'rgb(215, 48, 31)',
      'rgb(179, 0, 0)',
      'rgb(127, 0, 0)',
    ],
    [
      'rgb(255, 247, 251)',
      'rgb(236, 231, 242)',
      'rgb(208, 209, 230)',
      'rgb(166, 189, 219)',
      'rgb(116, 169, 207)',
      'rgb(54, 144, 192)',
      'rgb(5, 112, 176)',
      'rgb(4, 90, 141)',
      'rgb(2, 56, 88)',
    ],
    [
      'rgb(255, 247, 251)',
      'rgb(236, 226, 240)',
      'rgb(208, 209, 230)',
      'rgb(166, 189, 219)',
      'rgb(103, 169, 207)',
      'rgb(54, 144, 192)',
      'rgb(2, 129, 138)',
      'rgb(1, 108, 89)',
      'rgb(1, 70, 54)',
    ],
    [
      'rgb(247, 244, 249)',
      'rgb(231, 225, 239)',
      'rgb(212, 185, 218)',
      'rgb(201, 148, 199)',
      'rgb(223, 101, 176)',
      'rgb(231, 41, 138)',
      'rgb(206, 18, 86)',
      'rgb(152, 0, 67)',
      'rgb(103, 0, 31)',
    ],
    [
      'rgb(255, 247, 243)',
      'rgb(253, 224, 221)',
      'rgb(252, 197, 192)',
      'rgb(250, 159, 181)',
      'rgb(247, 104, 161)',
      'rgb(221, 52, 151)',
      'rgb(174, 1, 126)',
      'rgb(122, 1, 119)',
      'rgb(73, 0, 106)',
    ],
    [
      'rgb(255, 255, 229)',
      'rgb(247, 252, 185)',
      'rgb(217, 240, 163)',
      'rgb(173, 221, 142)',
      'rgb(120, 198, 121)',
      'rgb(65, 171, 93)',
      'rgb(35, 132, 67)',
      'rgb(0, 104, 55)',
      'rgb(0, 69, 41)',
    ],
    [
      'rgb(255, 255, 217)',
      'rgb(237, 248, 177)',
      'rgb(199, 233, 180)',
      'rgb(127, 205, 187)',
      'rgb(65, 182, 196)',
      'rgb(29, 145, 192)',
      'rgb(34, 94, 168)',
      'rgb(37, 52, 148)',
      'rgb(8, 29, 88)',
    ],
    [
      'rgb(255, 255, 229)',
      'rgb(255, 247, 188)',
      'rgb(254, 227, 145)',
      'rgb(254, 196, 79)',
      'rgb(254, 153, 41)',
      'rgb(236, 112, 20)',
      'rgb(204, 76, 2)',
      'rgb(153, 52, 4)',
      'rgb(102, 37, 6)',
    ],
    [
      'rgb(255, 255, 204)',
      'rgb(255, 237, 160)',
      'rgb(254, 217, 118)',
      'rgb(254, 178, 76)',
      'rgb(253, 141, 60)',
      'rgb(252, 78, 42)',
      'rgb(227, 26, 28)',
      'rgb(189, 0, 38)',
      'rgb(128, 0, 38)',
    ],
  ],
  singlehue: [
    [
      'rgb(247, 252, 245)',
      'rgb(229, 245, 224)',
      'rgb(199, 233, 192)',
      'rgb(161, 217, 155)',
      'rgb(116, 196, 118)',
      'rgb(65, 171, 93)',
      'rgb(35, 139, 69)',
      'rgb(0, 109, 44)',
      'rgb(0, 68, 27)',
    ],
    [
      'rgb(255, 255, 255)',
      'rgb(240, 240, 240)',
      'rgb(217, 217, 217)',
      'rgb(189, 189, 189)',
      'rgb(150, 150, 150)',
      'rgb(115, 115, 115)',
      'rgb(82, 82, 82)',
      'rgb(37, 37, 37)',
      'rgb(0, 0, 0)',
    ],
    [
      'rgb(255, 245, 235)',
      'rgb(254, 230, 206)',
      'rgb(253, 208, 162)',
      'rgb(253, 174, 107)',
      'rgb(253, 141, 60)',
      'rgb(241, 105, 19)',
      'rgb(217, 72, 1)',
      'rgb(166, 54, 3)',
      'rgb(127, 39, 4)',
    ],
    [
      'rgb(252, 251, 253)',
      'rgb(239, 237, 245)',
      'rgb(218, 218, 235)',
      'rgb(188, 189, 220)',
      'rgb(158, 154, 200)',
      'rgb(128, 125, 186)',
      'rgb(106, 81, 163)',
      'rgb(84, 39, 143)',
      'rgb(63, 0, 125)',
    ],
    [
      'rgb(255, 245, 240)',
      'rgb(254, 224, 210)',
      'rgb(252, 187, 161)',
      'rgb(252, 146, 114)',
      'rgb(251, 106, 74)',
      'rgb(239, 59, 44)',
      'rgb(203, 24, 29)',
      'rgb(165, 15, 21)',
      'rgb(103, 0, 13)',
    ],
  ],
  diverging: [
    [
      'rgb(140, 81, 10)',
      'rgb(191, 129, 45)',
      'rgb(223, 194, 125)',
      'rgb(246, 232, 195)',
      'rgb(245, 245, 245)',
      'rgb(199, 234, 229)',
      'rgb(128, 205, 193)',
      'rgb(53, 151, 143)',
      'rgb(1, 102, 94)',
    ],
    [
      'rgb(197, 27, 125)',
      'rgb(222, 119, 174)',
      'rgb(241, 182, 218)',
      'rgb(253, 224, 239)',
      'rgb(247, 247, 247)',
      'rgb(230, 245, 208)',
      'rgb(184, 225, 134)',
      'rgb(127, 188, 65)',
      'rgb(77, 146, 33)',
    ],
    [
      'rgb(118, 42, 131)',
      'rgb(153, 112, 171)',
      'rgb(194, 165, 207)',
      'rgb(231, 212, 232)',
      'rgb(247, 247, 247)',
      'rgb(217, 240, 211)',
      'rgb(166, 219, 160)',
      'rgb(90, 174, 97)',
      'rgb(27, 120, 55)',
    ],
    [
      'rgb(179, 88, 6)',
      'rgb(224, 130, 20)',
      'rgb(253, 184, 99)',
      'rgb(254, 224, 182)',
      'rgb(247, 247, 247)',
      'rgb(216, 218, 235)',
      'rgb(178, 171, 210)',
      'rgb(128, 115, 172)',
      'rgb(84, 39, 136)',
    ],
    [
      'rgb(178, 24, 43)',
      'rgb(214, 96, 77)',
      'rgb(244, 165, 130)',
      'rgb(253, 219, 199)',
      'rgb(247, 247, 247)',
      'rgb(209, 229, 240)',
      'rgb(146, 197, 222)',
      'rgb(67, 147, 195)',
      'rgb(33, 102, 172)',
    ],
    [
      'rgb(178, 24, 43)',
      'rgb(214, 96, 77)',
      'rgb(244, 165, 130)',
      'rgb(253, 219, 199)',
      'rgb(255, 255, 255)',
      'rgb(224, 224, 224)',
      'rgb(186, 186, 186)',
      'rgb(135, 135, 135)',
      'rgb(77, 77, 77)',
    ],
    [
      'rgb(215, 48, 39)',
      'rgb(244, 109, 67)',
      'rgb(253, 174, 97)',
      'rgb(254, 224, 144)',
      'rgb(255, 255, 191)',
      'rgb(224, 243, 248)',
      'rgb(171, 217, 233)',
      'rgb(116, 173, 209)',
      'rgb(69, 117, 180)',
    ],
    [
      'rgb(215, 48, 39)',
      'rgb(244, 109, 67)',
      'rgb(253, 174, 97)',
      'rgb(254, 224, 139)',
      'rgb(255, 255, 191)',
      'rgb(217, 239, 139)',
      'rgb(166, 217, 106)',
      'rgb(102, 189, 99)',
      'rgb(26, 152, 80)',
    ],
    [
      'rgb(213, 62, 79)',
      'rgb(244, 109, 67)',
      'rgb(253, 174, 97)',
      'rgb(254, 224, 139)',
      'rgb(255, 255, 191)',
      'rgb(230, 245, 152)',
      'rgb(171, 221, 164)',
      'rgb(102, 194, 165)',
      'rgb(50, 136, 189)',
    ],
  ],
};

export const DATASET_COLOR_LIST = [
  'rgb(213, 62, 79)',
  'rgb(67, 147, 195)',
  'rgb(102, 189, 99)',
  'rgb(255, 255, 191)',
  'rgb(135, 135, 135)',
  'rgb(244, 109, 67)',
  'rgb(197, 27, 125)',
  'rgb(171, 221, 164)',
  'rgb(146, 197, 222)',
  'rgb(179, 88, 6)',
  'rgb(128, 115, 172)',
  'rgb(0, 109, 44)',
];
