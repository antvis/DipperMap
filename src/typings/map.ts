export type IMapType = 'amap' | 'mapbox';

export type IMapTheme =
  | 'dark'
  | 'normal'
  | 'light'
  | 'whitesmoke'
  | 'fresh'
  | 'grey'
  | 'graffiti'
  | 'macaron'
  | 'blue'
  | 'darkblue'
  | 'wine';

export interface IMapConfig {
  mapTheme: IMapTheme;
  mapLayers: string[];
  mapType: IMapType;
  mapPitch: number;
  mapRotate: number;
}
