import React, { createContext, useState } from 'react';
import { IFilter, IInteractive, ILayer } from '../typings';
import useIndexDBHook from '../hooks/indexdb';

export interface IProps {
  layerList: ILayer[];
  setLayerList: (value: ILayer[]) => void;
  filterList: IFilter[];
  setFilterList: (value: IFilter[]) => void;
  interactiveList: IInteractive[];
  setInteractiveList: (value: IInteractive[]) => void;
}

// @ts-ignore
export const ConfigModelContext = createContext<IProps>();

const { Provider, Consumer } = ConfigModelContext;

export { Consumer };

const MapContextProvider: React.FC = ({ children }) => {
  const [layerList, setLayerList] = useState<ILayer[]>([]);
  const [filterList, setFilterList] = useState<IFilter[]>([]);
  const [interactiveList, setInteractiveList] = useState<IInteractive[]>([]);

  useIndexDBHook(layerList, setLayerList, 'LAYER_LIST', []);
  useIndexDBHook(filterList, setFilterList, 'FILTER_LIST', []);
  useIndexDBHook(interactiveList, setInteractiveList, 'INTERACTIVE_LIST', []);

  return (
    <Provider
      value={{
        layerList,
        setLayerList,
        filterList,
        setFilterList,
        interactiveList,
        setInteractiveList,
      }}
    >
      {children}
    </Provider>
  );
};

export default MapContextProvider;
