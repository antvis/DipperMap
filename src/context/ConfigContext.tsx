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

const MapContext: React.FC = ({ children }) => {
  const [layerList, setLayerList] = useState<ILayer[]>([]);
  const [filterList, setFilterList] = useState<IFilter[]>([]);
  const [interactiveList, setInteractiveList] = useState<IInteractive[]>([]);

  useIndexDBHook<ILayer>(layerList, setLayerList, 'LAYER_LIST');
  useIndexDBHook<IFilter>(filterList, setFilterList, 'FILTER_LIST');
  useIndexDBHook<IInteractive>(
    interactiveList,
    setInteractiveList,
    'INTERACTIVE_LIST',
  );

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

export default MapContext;
