import React, { createContext, useState } from 'react';
import { LOCAL_STORAGE_KEY, MAP_THEME_LIST } from '../constants';

export interface IProps {
  mapTheme: string;
  setMapTheme: (value: string) => void;
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

  return <Provider value={{ mapTheme, setMapTheme }}>{children}</Provider>;
};

export default MapContext;
