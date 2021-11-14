import React, { useEffect, useState } from 'react';
import { InputNumber, Slider } from 'antd';
import styles from './index.less';

const SingleRange: React.FC<{
  value?: number;
  onChange?: (newValue: number) => void;
}> = ({ value, onChange }) => {
  const [cacheValue, setCacheValue] = useState(value);

  useEffect(() => {
    setCacheValue(value);
  }, [value]);

  const onCacheValueChange = (newValue: number) => {
    setCacheValue(newValue ?? 1);
    onChange?.(newValue ?? 1);
  };

  return (
    <div className={styles.singleRange}>
      <Slider
        value={cacheValue}
        onChange={setCacheValue}
        onAfterChange={onCacheValueChange}
        min={1}
        max={100}
      />
      <InputNumber
        value={cacheValue}
        onChange={onCacheValueChange}
        min={1}
        max={100}
      />
    </div>
  );
};

export default SingleRange;
