import React, { createContext } from 'react';
import { LOCAL_STORAGE_KEY, MAP_THEME_LIST, MAP_TYPES } from '../constants';
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
}

// @ts-ignore
export const MapModelContext = createContext<IProps>();

const { Provider, Consumer } = MapModelContext;

export { Consumer };

const MapContextProvider: React.FC = ({ children }) => {
  const [mapTheme, setMapTheme] = useLocalStorageState<IMapTheme>(
    LOCAL_STORAGE_KEY.MAP_THEME,
    MAP_THEME_LIST[0].value as IMapTheme,
  );
  const [mapType, setMapType] = useLocalStorageState<IMapType>(
    LOCAL_STORAGE_KEY.MAP_TYPE,
    MAP_TYPES[0].value as IMapType,
  );

  const [mapPitch, setMapPitch] = useLocalStorageState<number>(
    LOCAL_STORAGE_KEY.MAP_PITCH,
    0,
  );

  const [mapRotate, setMapRotate] = useLocalStorageState<number>(
    LOCAL_STORAGE_KEY.MAP_ROTATE,
    0,
  );

  return (
    <Provider
      value={{
        mapTheme,
        // @ts-ignore
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
