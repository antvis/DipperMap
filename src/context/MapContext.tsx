import React, { createContext, useCallback } from 'react';
import { LOCAL_STORAGE_KEY, DEFAULT_MAP_CONFIG } from '../constants';
import { IMapConfig, IMapTheme, IMapType } from '../typings';
import { useLocalStorageState } from 'ahooks';

export interface IProps {
  mapTheme: IMapTheme;
  setMapTheme: (value: IMapTheme) => void;
  mapType: IMapType;
  setMapType: (value: IMapType) => void;
  mapPitch: number;
  setMapPitch: (value: number) => void;
  mapRotate: number;
  setMapRotate: (value: number) => void;
  mapLayers: string[];
  setMapLayers: (value: string[]) => void;
  setMapConfig: (value: IMapConfig) => void;
}

// @ts-ignore
export const MapModelContext = createContext<IProps>();

const { Provider, Consumer } = MapModelContext;

export { Consumer };

const MapContextProvider: React.FC = ({ children }) => {
  const [mapTheme, setMapTheme] = useLocalStorageState<IMapTheme>(
    LOCAL_STORAGE_KEY.MAP_THEME,
    DEFAULT_MAP_CONFIG.mapTheme,
  );

  const [mapLayers, setMapLayers] = useLocalStorageState<string[]>(
    LOCAL_STORAGE_KEY.MAP_LAYER,
    DEFAULT_MAP_CONFIG.mapLayers,
  );

  const [mapType, setMapType] = useLocalStorageState<IMapType>(
    LOCAL_STORAGE_KEY.MAP_TYPE,
    DEFAULT_MAP_CONFIG.mapType,
  );

  const [mapPitch, setMapPitch] = useLocalStorageState<number>(
    LOCAL_STORAGE_KEY.MAP_PITCH,
    DEFAULT_MAP_CONFIG.mapPitch,
  );

  const [mapRotate, setMapRotate] = useLocalStorageState<number>(
    LOCAL_STORAGE_KEY.MAP_ROTATE,
    DEFAULT_MAP_CONFIG.mapRotate,
  );

  const setMapConfig = useCallback(
    (mapConfig: IMapConfig) => {
      setMapTheme(mapConfig.mapTheme);
      setMapLayers(mapConfig.mapLayers);
      setMapType(mapConfig.mapType);
      setMapPitch(mapConfig.mapPitch);
      setMapRotate(mapConfig.mapRotate);
    },
    [setMapLayers, setMapPitch, setMapRotate, setMapTheme, setMapType],
  );

  return (
    <Provider
      value={{
        mapTheme,
        setMapTheme,
        mapLayers,
        setMapLayers,
        mapType,
        setMapType,
        mapPitch,
        setMapPitch,
        mapRotate,
        setMapRotate,
        setMapConfig,
      }}
    >
      {children}
    </Provider>
  );
};

export default MapContextProvider;
