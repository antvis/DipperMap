import React, { useCallback, useContext } from 'react';
import { AMapScene, MapboxScene } from '@antv/l7-react';
import { MapModelContext } from '../../context/MapContext';
import { IMapType } from '../../typings';
import { AMAP_LAYER_LIST } from '../../constants';
import { Scene } from '@antv/l7';
import { GlobalModelContext } from '../../context/GlobalContext';

const AppMap: React.FC<{ map?: IMapType }> = ({ children, map = 'amap' }) => {
  const { setScene } = useContext(GlobalModelContext);
  const { mapType, mapTheme, mapPitch, mapRotate } =
    useContext(MapModelContext);
  const MapScene = map === 'amap' ? AMapScene : MapboxScene;
  const style = map === 'amap' ? 'amap://styles/' + mapTheme : mapTheme;

  const onSceneLoaded = useCallback(
    (scene: Scene) => {
      if (mapType === 'amap') {
        const layerList: AMap.Layer[] = [];
        AMAP_LAYER_LIST.forEach((item) => {
          const layer = item.getLayer();
          item.layer = layer;
          layer.hide();
          layerList.push(layer);
        });
        (scene.map as any).add(layerList);
      }
      setScene(scene);
    },
    [mapType, setScene],
  );

  return (
    <MapScene
      map={{
        center: [120.153576, 30.287459],
        pitch: mapPitch,
        zoom: 10,
        rotation: mapRotate,
        style,
      }}
      option={{
        logoPosition: 'bottomright',
      }}
      onSceneLoaded={onSceneLoaded}
    >
      {children}
    </MapScene>
  );
};

export default AppMap;
