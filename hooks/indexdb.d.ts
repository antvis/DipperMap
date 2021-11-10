import type { STORE_KEY_TYPE } from '../utils';
/**
 * 将list持久化保存在indexDb中
 * @param list
 * @param setList
 * @param key
 */
declare const useIndexDBHook: <P>(list: P, setList: (newList: P) => void, key: STORE_KEY_TYPE) => void;
export default useIndexDBHook;
