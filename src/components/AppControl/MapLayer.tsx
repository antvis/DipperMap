import React, { useCallback, useContext, useEffect } from 'react';
import AppControlItem from './common/AppControlItem';
import { MapModelContext } from '../../context/MapContext';
import { AMAP_LAYER_LIST } from '../../constants';
import { Checkbox } from 'antd';
import styles from './index.less';
import { GlobalModelContext } from '../../context/GlobalContext';

const MapTheme: React.FC = () => {
  const { scene } = useContext(GlobalModelContext);
  const { mapLayers, setMapLayers } = useContext(MapModelContext);

  const refreshMapLayer = useCallback(() => {
    AMAP_LAYER_LIST.forEach((item) => {
      if (mapLayers.includes(item.value)) {
        item.layer?.show();
      } else {
        item.layer?.hide();
      }
    });
  }, [mapLayers]);

  useEffect(() => {
    if (scene) {
      refreshMapLayer();
    }
  }, [mapLayers, refreshMapLayer, scene]);

  return (
    <AppControlItem
      title="地图图层"
      icon={<i className="dpiconfont dpicon-tuceng3" />}
      dropdown={
        <div className={styles.mapLayer}>
          {/* @ts-ignore */}
          <Checkbox.Group value={mapLayers} onChange={setMapLayers}>
            {AMAP_LAYER_LIST.map((item) => (
              <Checkbox value={item.value} key={item.value}>
                {item.icon} {item.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
      }
    />
  );
};

export default MapTheme;
