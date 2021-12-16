import { Divider, Slider } from 'antd';
import React, { useContext } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlItem from './common/AppControlItem';
import styles from './index.less';

export default function MapControl() {
  const { mapPitch, setMapPitch, mapRotate, setMapRotate } =
    useContext(MapModelContext);

  return (
    <AppControlItem
      title="地图倾角"
      icon={<i className="dpiconfont dpicon-yinqing_jiaodu" />}
      dropdown={
        <div className={styles.mapPitch}>
          <div className={styles.mapPitchLabel}>
            <span>地图倾斜</span>
            <span>{mapPitch}°</span>
          </div>
          <Slider value={mapPitch} min={0} max={90} onChange={setMapPitch} />
          <Divider />
          <div className={styles.mapPitchLabel}>
            <span>地图旋转</span>
            <span>{mapRotate}°</span>
          </div>
          <Slider value={mapRotate} min={0} max={360} onChange={setMapRotate} />
        </div>
      }
    />
  );
}
