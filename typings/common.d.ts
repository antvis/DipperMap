export interface IEntity {
    id: string;
    name: string;
    order: number;
    createTime: number;
    datasetId?: string | null;
}
export interface IOption<P = string> {
    label: string;
    value: P;
    [key: string]: any;
}
export declare type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U];
};
