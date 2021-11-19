import React, { createContext, useContext, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEY, MAP_THEME_LIST, MAP_TYPES } from '../constants';
import { PropsModelContext } from './PropContext';
import { IMapType } from '../typings';

export interface IProps {
  mapTheme: string;
  setMapTheme: (value: string) => void;
  mapType: IMapType;
  setMapType: (value: IMapType) => void;
  mapPitch: number;
  setMapPitch: (value: number) => void;
  mapRotate: number;
  setMapRotate: (value: number) => void;
}

// @ts-ignore
export const MapModelContext = createContext<IProps>();

const { Provider, Consumer } = MapModelContext;

export { Consumer };

const MapContextProvider: React.FC = ({ children }) => {
  const { component } = useContext(PropsModelContext);

  const [mapTheme, setMapTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY.MAP_THEME) ??
      MAP_THEME_LIST[0].value,
  );
  const [mapType, setMapType] = useState<IMapType>(
    (localStorage.getItem(LOCAL_STORAGE_KEY.MAP_TYPE) ??
      MAP_TYPES[0].value) as IMapType,
  );

  const [mapPitch, setMapPitch] = useState<number>(
    +(localStorage.getItem(LOCAL_STORAGE_KEY.MAP_PITCH) ?? 0),
  );

  const [mapRotate, setMapRotate] = useState<number>(
    +(localStorage.getItem(LOCAL_STORAGE_KEY.MAP_ROTATE) ?? 0),
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_THEME, mapTheme);
  }, [mapTheme]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_TYPE, mapType);
  }, [mapType]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_PITCH, `${mapPitch}`);
  }, [mapPitch]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_ROTATE, `${mapRotate}`);
  }, [mapRotate]);

  return (
    <Provider
      value={{
        mapTheme,
        setMapTheme,
        mapType,
        setMapType,
        mapPitch,
        setMapPitch,
        mapRotate,
        setMapRotate,
      }}
    >
      {children}
    </Provider>
  );
};

export default MapContextProvider;
