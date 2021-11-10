export declare type STORE_KEY_TYPE = 'DATASET_LIST' | 'LAYER_LIST' | 'FILTER_LIST' | 'INTERACTIVE_LIST' | 'FILTERED_DATASET' | 'PLAN_LIST' | 'SELECT_PLAN_ID';
export declare function getDBStore<P = any>(key: STORE_KEY_TYPE): Promise<P>;
export declare function setDBStore<P = any>(key: STORE_KEY_TYPE, value: P): any;
