import React, { useContext } from 'react';
import { AMapScene, MapboxScene } from '@antv/l7-react';
import { MapModelContext } from '../../context/MapContext';
import { IMapType } from '../../constants';

const AppMap: React.FC<{ className?: string; map?: IMapType }> = ({
  children,
  className,
  map = 'amap',
}) => {
  const { mapTheme } = useContext(MapModelContext);
  const MapScene = map === 'amap' ? AMapScene : MapboxScene;

  return (
    <MapScene
      className={className}
      map={{
        center: [120.153576, 30.287459],
        pitch: 0,
        zoom: 10,
        style: mapTheme,
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
