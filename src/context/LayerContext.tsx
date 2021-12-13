import React, { createContext, useState } from 'react';
import { ILayer } from '../typings';
import useIndexDBHook from '../hooks/indexdb';

export interface IProps {
  layerList: ILayer[];
  setLayerList: (value: ILayer[]) => void;
}

// @ts-ignore
export const LayerModelContext = createContext<IProps>();

const { Provider, Consumer } = LayerModelContext;

export { Consumer };

const LayerContextProvider: React.FC = ({ children }) => {
  const [layerList, setLayerList] = useState<ILayer[]>([]);

  useIndexDBHook(layerList, setLayerList, 'LAYER_LIST', []);

  return (
    <Provider
      value={{
        layerList,
        setLayerList,
      }}
    >
      {children}
    </Provider>
  );
};

export default LayerContextProvider;
