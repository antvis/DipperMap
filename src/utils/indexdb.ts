// @ts-ignore
import IdbKvStore from 'idb-kv-store';

const store = new IdbKvStore('DipperMap');

export type STORE_KEY_TYPE =
  | 'DATASET_LIST'
  | 'LAYER_LIST'
  | 'FILTER_LIST'
  | 'INTERACTIVE_LIST'
  | 'FILTERED_DATASET'
  | 'PLAN_LIST'
  | 'SELECT_PLAN_ID';

export function getDBStore<P = any>(key: STORE_KEY_TYPE) {
  return store.get(key) as Promise<P>;
  // return new Promise(() => {});
}

export function setDBStore<P = any>(key: STORE_KEY_TYPE, value: P) {
  return store.set(key, value);
  // return new Promise(() => {});
}
