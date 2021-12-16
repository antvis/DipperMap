import React, { createContext, useState } from 'react';
import { IFilter } from '../typings';
import useIndexdb from '../hooks/useIndexdb';

export interface IProps {
  filterList: IFilter[];
  setFilterList: (value: IFilter[]) => void;
}

// @ts-ignore
export const FilterModelContext = createContext<IProps>();

const { Provider, Consumer } = FilterModelContext;

export { Consumer };

const FilterContextProvider: React.FC = ({ children }) => {
  const [filterList, setFilterList] = useState<IFilter[]>([]);

  useIndexdb(filterList, setFilterList, 'FILTER_LIST', []);

  return (
    <Provider
      value={{
        filterList,
        setFilterList,
      }}
    >
      {children}
    </Provider>
  );
};

export default FilterContextProvider;
