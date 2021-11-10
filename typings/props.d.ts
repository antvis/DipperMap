export declare type IBaseComponentConfig<P = string> = boolean | {
    display: boolean;
    defaultValue: P;
};
export interface IGlobalComponentConfig {
    mapTheme: IBaseComponentConfig<string>;
    mapType: IBaseComponentConfig<string>;
    preview: boolean;
}
export interface IGlobalConfig {
    component: IGlobalComponentConfig;
    store: boolean;
    onChange: () => void;
    onDatasetChange: () => void;
    onLayerChange: () => void;
    onFilterChange: () => void;
}
