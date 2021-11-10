import type { IEntity } from './common';
export declare type IDatasetFieldType = 'string' | 'number' | 'boolean';
export interface IDatasetStringField<T = string> {
    type: 'string';
    name: T | string;
    values: string[];
    uniqueValues: string[];
    range?: [number, number];
}
export interface IDatasetNumberField<T = string> {
    type: 'number';
    name: T | string;
    values: number[];
    uniqueValues: number[];
    range: [number, number];
}
export interface IDatasetBooleanField<T = string> {
    type: 'boolean';
    name: T | string;
}
export declare type IDatasetField<T = string> = IDatasetStringField<T> | IDatasetBooleanField<T> | IDatasetNumberField<T>;
export interface IDataset<P = Record<string, any>> extends IEntity {
    type: 'json' | 'csv';
    url?: string;
    data: P[];
    fields: IDatasetField<keyof P>[];
}
