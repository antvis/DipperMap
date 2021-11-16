import { Slider } from 'antd';
import React, { useCallback, useContext } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlItem from './common/AppControlItem';
import { FundOutlined } from '@ant-design/icons';

export default function PitchControl() {
  const { mapPitch, setMapPitch } = useContext(MapModelContext);

  const onChange = useCallback((val: number) => {
    setMapPitch(val);
  }, []);

  return (
    <AppControlItem
      title="地图倾角"
      icon={<FundOutlined />}
      dropdown={
        <div style={{ width: 100 }}>
          <Slider value={mapPitch} min={0} max={90} onChange={onChange} />
        </div>
      }
    />
  );
}
