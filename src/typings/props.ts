import { IDataset } from './dataset';
import { ILayer } from './layer';
import { IFilter } from './filter';
import { IInteractive } from './interactive';
import { DeepPartial } from './common';

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

export type IBaseComponentProps<
  ValueType = string,
  Extends = Record<string, any>,
> =
  | boolean
  | ({
      display: boolean;
      defaultValue: ValueType;
      onChange: (newValue: ValueType) => void;
    } & Extends);

export type IMapThemeConfig = IBaseComponentProps<IMapTheme>;

export type IMapTypeConfig = IBaseComponentProps<IMapType>;

export type IPreviewConfig = IBaseComponentProps<boolean>;

export type ILayerConfig = IBaseComponentProps<ILayer[]>;

export type IFilterConfig = IBaseComponentProps<IFilter[]>;

export type IInteractiveConfig = IBaseComponentProps<IInteractive[]>;

export type IDatasetConfig = IBaseComponentProps<IDataset[]>;

export interface IComponentProps {
  mapTheme: IMapThemeConfig;
  mapType: IMapTypeConfig;
  preview: IPreviewConfig;
  dataset: IDatasetConfig;
  layer: ILayerConfig;
  filter: IFilterConfig;
  interactive: IInteractiveConfig;
}

export interface IGlobalProps {
  component: DeepPartial<IComponentProps>;
  store?: boolean;
  onChange?: () => void;
}
