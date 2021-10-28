import type { IEntity } from './common';
import type {
  IDatasetBooleanField,
  IDatasetField,
  IDatasetNumberField,
  IDatasetStringField,
} from './dataset';

export interface IBaseFilter extends IEntity {
  enable: boolean;
  field?: IDatasetField | null;
}

export interface INumberFilter extends IBaseFilter {
  field: IDatasetNumberField;
  value: [number, number];
}

export interface IStringFilter extends IBaseFilter {
  field: IDatasetStringField;
  value: string[];
}

export interface IBooleanFilter extends IBaseFilter {
  field: IDatasetBooleanField;
  value: boolean;
}

export type IFilter = INumberFilter | IStringFilter | IBooleanFilter;
