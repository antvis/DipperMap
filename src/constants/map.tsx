import React from 'react';
import { IMapTheme, IMapType, IOption } from '../typings';

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

export const AMAP_LAYER_LIST: (IOption<string> & {
  icon: JSX.Element;
  getLayer: () => AMap.Layer;
  layer?: AMap.Layer | null;
})[] = [
  {
    label: '卫星图层',
    value: 'Satellite',
    getLayer: () => new window.AMap.TileLayer.Satellite(),
    icon: <i className="dpiconfont dpicon-weixing" />,
  },
  {
    label: '路网图层',
    value: 'RoadNet',
    getLayer: () => new window.AMap.TileLayer.RoadNet(),
    icon: <i className="dpiconfont dpicon-luwang" />,
  },
  {
    label: '路况图层',
    value: 'Traffic',
    getLayer: () => new window.AMap.TileLayer.Traffic(),
    icon: <i className="dpiconfont dpicon-road-conditions_line" />,
  },
];

export const AMAP_THEME_LIST: IOption<IMapTheme>[] = [
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

export const DEFAULT_MAP_CONFIG = {
  mapTheme: AMAP_THEME_LIST[0].value as IMapTheme,
  mapLayers: [],
  mapType: MAP_TYPES[0].value as IMapType,
  mapPitch: 0,
  mapRotate: 0,
};
