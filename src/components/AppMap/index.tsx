import React, { useContext } from 'react';
import { AMapScene, MapboxScene } from '@antv/l7-react';
import { MapModelContext } from '../../context/MapContext';
import { IMapType } from '../../typings';

const AppMap: React.FC<{ className?: string; map?: IMapType }> = ({
  children,
  className,
  map = 'amap',
}) => {
  const { mapTheme, mapPitch } = useContext(MapModelContext);
  const MapScene = map === 'amap' ? AMapScene : MapboxScene;
  const style = map === 'amap' ? 'amap://styles/' + mapTheme : mapTheme;

  return (
    <MapScene
      className={className}
      map={{
        center: [120.153576, 30.287459],
        pitch: mapPitch,
        zoom: 10,
        style,
      }}
      option={{
        logoPosition: 'bottomright',
      }}
    >
      {children}
    </MapScene>
  );
};

export default AppMap;
