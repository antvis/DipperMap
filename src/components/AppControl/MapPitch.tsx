import { Slider } from 'antd';
import React, { useCallback, useContext } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlItem from './common/AppControlItem';
import styles from './index.less';

export default function PitchControl() {
  const { mapPitch, setMapPitch } = useContext(MapModelContext);

  const onChange = useCallback((val: number) => {
    setMapPitch(val);
  }, []);

  return (
    <AppControlItem
      title="地图倾角"
      icon={<i className="dpiconfont dpicon-yinqing_jiaodu" />}
      dropdown={
        <div className={styles.mapPitch}>
          <div>地图倾角</div>
          <Slider value={mapPitch} min={0} max={90} onChange={onChange} />
        </div>
      }
    />
  );
}
