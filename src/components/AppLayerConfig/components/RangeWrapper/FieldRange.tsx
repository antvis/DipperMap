import React, { useEffect, useMemo, useState } from 'react';
import { InputNumber, Slider } from 'antd';
import styles from './index.less';

const FieldRange: React.FC<{
  value?: [number, number];
  onChange?: (newValue: [number, number]) => void;
}> = ({ value, onChange }) => {
  const realValue: [number, number] = useMemo(
    () => (Array.isArray(value) ? value : [1, 100]),
    [value],
  );

  const [cacheValue, setCacheValue] = useState(realValue);

  useEffect(() => {
    setCacheValue(realValue);
  }, [realValue]);

  const onCacheValueChange = (newValue: [number, number]) => {
    setCacheValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.fieldRange}>
      <Slider
        range
        value={cacheValue}
        onChange={setCacheValue}
        onAfterChange={onCacheValueChange}
        min={1}
        max={100}
      />

      <div className={styles.splitPanel}>
        <InputNumber
          value={cacheValue[0]}
          onChange={(newMin) => setCacheValue([newMin, cacheValue[1]])}
          min={1}
          max={cacheValue[1]}
        />
        <InputNumber
          value={cacheValue[1]}
          onChange={(newMax) => setCacheValue([cacheValue[1], newMax])}
          min={cacheValue[0]}
          max={100}
        />
      </div>
    </div>
  );
};

export default FieldRange;
