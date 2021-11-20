import { Slider } from 'antd';
import React, { useCallback, useContext } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlItem from './common/AppControlItem';
import styles from './index.less';

interface PitchControlProps {
  title: string;
  value: number;
  icon: JSX.Element;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
}

export default function MapControl({
  title,
  value,
  setValue,
  icon,
  min = 0,
  max = 90,
}: PitchControlProps) {
  const onChange = useCallback((val: number) => {
    setValue(val);
  }, []);

  return (
    <AppControlItem
      title={title}
      icon={icon}
      dropdown={
        <div className={styles.mapPitch}>
          <div>{title}</div>
          <Slider value={value} min={min} max={max} onChange={onChange} />
        </div>
      }
    />
  );
}
