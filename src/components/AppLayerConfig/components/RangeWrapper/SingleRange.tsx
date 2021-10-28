import React, { useEffect, useState } from 'react';
import { InputNumber, Slider } from 'antd';

const SingleRange: React.FC<{ value?: number; onChange?: (newValue: number) => void }> = ({
  value,
  onChange,
}) => {
  const [cacheValue, setCacheValue] = useState(value);

  useEffect(() => {
    setCacheValue(value);
  }, [value]);

  const onCacheValueChange = (newValue: number) => {
    setCacheValue(newValue);
    onChange?.(newValue);
  };

  return (
    <>
      <Slider
        value={cacheValue}
        onChange={setCacheValue}
        onAfterChange={onCacheValueChange}
        min={1}
        max={100}
      />
      <InputNumber value={cacheValue} onChange={setCacheValue} min={1} max={100} />
    </>
  );
};

export default SingleRange;
