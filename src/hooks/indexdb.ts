import type { STORE_KEY_TYPE } from '../utils';
import { getDBStore, setDBStore } from '../utils';
import { useEffect } from 'react';
import { useDebounceEffect } from 'ahooks';

/**
 * 将list持久化保存在indexDb中
 * @param list
 * @param setList
 * @param key
 */
const useIndexDBHook: <P>(list: P[], setList: (newList: P[]) => void, key: STORE_KEY_TYPE) => void =
  (list, setList, key) => {
    useEffect(() => {
      getDBStore(key).then((newList = []) => {
        setList(newList);
      });
    }, []);

    useDebounceEffect(
      () => {
        setDBStore(key, list ?? []);
      },
      [list],
      {
        wait: 500,
      },
    );
  };

export default useIndexDBHook;
