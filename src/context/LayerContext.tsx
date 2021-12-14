import React, { createContext, useState } from 'react';
import { ILayer } from '../typings';
import useIndexdb from '../hooks/useIndexdb';

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

  useIndexdb(layerList, setLayerList, 'LAYER_LIST', []);

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
