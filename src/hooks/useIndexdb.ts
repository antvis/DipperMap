import type { STORE_KEY_TYPE } from '../utils';
import { getDBStore, setDBStore } from '../utils';
import { useEffect } from 'react';
import { useDebounceEffect } from 'ahooks';

/**
 * 将list持久化保存在indexDb中
 * @param state
 * @param setState
 * @param key
 * @param defaultValue
 */
const useIndexdb: <P>(
  state: P,
  setState: (newList: P) => void,
  key: STORE_KEY_TYPE,
  defaultValue: P,
) => void = (state, setState, key, defaultValue) => {
  useEffect(() => {
    getDBStore(key).then((newState = defaultValue) => {
      setState(newState);
    });
  }, []);

  useDebounceEffect(
    () => {
      setDBStore(key, state ?? defaultValue);
    },
    [state],
    {
      wait: 500,
    },
  );
};

export default useIndexdb;
