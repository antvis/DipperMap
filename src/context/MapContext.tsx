import React, { createContext, useState } from 'react';
import {
  LOCAL_STORAGE_KEY,
  Maps,
  MAP_THEME_LIST,
  MAP_TYPES,
} from '../constants';

export interface IProps {
  mapTheme: string;
  setMapTheme: (value: string) => void;
  mapType: Maps;
  setMapType: (value: Maps) => void;
}

// @ts-ignore
export const MapModelContext = createContext<IProps>();

const { Provider, Consumer } = MapModelContext;

export { Consumer };

const MapContext: React.FC = ({ children }) => {
  const [mapTheme, setMapTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY.MAP_THEME) ??
      MAP_THEME_LIST[0].value,
  );
  const [mapType, setMapType] = useState<Maps>(
    (localStorage.getItem(LOCAL_STORAGE_KEY.MAP_TYPE) ??
      MAP_TYPES[0].value) as Maps,
  );

  return (
    <Provider value={{ mapTheme, setMapTheme, mapType, setMapType }}>
      {children}
    </Provider>
  );
};

export default MapContext;
