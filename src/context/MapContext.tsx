import React, { createContext } from 'react';
import { LOCAL_STORAGE_KEY, DEFAULT_MAP_CONFIG } from '../constants';
import { IMapTheme, IMapType } from '../typings';
import { useLocalStorageState } from 'ahooks';

export interface IProps {
  mapTheme: string;
  setMapTheme: (value: string) => void;
  mapType: IMapType;
  setMapType: (value: IMapType) => void;
  mapPitch: number;
  setMapPitch: (value: number) => void;
  mapRotate: number;
  setMapRotate: (value: number) => void;
  mapLayers: string[];
  setMapLayers: (value: string[]) => void;
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

  return (
    <Provider
      value={{
        mapTheme,
        // @ts-ignore
        setMapTheme,
        mapLayers,
        setMapLayers,
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
