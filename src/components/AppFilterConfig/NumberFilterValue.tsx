import React, { useEffect, useState } from 'react';
import { getFilterRange } from '../../utils';
import styles from './index.less';
import { InputNumber, Slider } from '_antd@4.16.13@antd';
import { useDebounceEffect } from 'ahooks';
import { isEqual } from 'lodash';

export type INumberFilterValue = [number, number];

interface IProps {
  value: INumberFilterValue;
  range: INumberFilterValue;
  onChange: (newValue: INumberFilterValue) => void;
}

const NumberFilterValue: React.FC<IProps> = ({ value, onChange, range }) => {
  const [cacheValue, setCacheValue] = useState<INumberFilterValue>(value);

  useEffect(() => {
    setCacheValue(value);
  }, [JSON.stringify(value)]);

  useDebounceEffect(
    () => {
      if (!isEqual(cacheValue, value)) {
        onChange(cacheValue);
      }
    },
    [cacheValue, onChange],
    {
      wait: 400,
    },
  );

  const [minRange, maxRange] = getFilterRange(range);
  const [minValue, maxValue] = cacheValue as [number, number];
  if (minValue === maxValue) {
    return (
      <span className={styles.filterValueTip}>
        该字段最小值和最大值一致，无法进行筛选
      </span>
    );
  }
  return (
    <>
      <Slider
        range
        step={1}
        value={cacheValue as [number, number]}
        min={minRange}
        max={maxRange}
        onAfterChange={setCacheValue}
        onChange={setCacheValue}
      />
      <div className={styles.inputRangePanel}>
        <InputNumber
          min={minRange}
          max={maxValue}
          value={minValue}
          onChange={(newMinValue) => onChange([newMinValue, maxValue])}
          onPressEnter={() => onChange(cacheValue)}
          onBlur={() => onChange(cacheValue)}
        />
        <InputNumber
          min={minValue}
          max={maxRange}
          value={maxValue}
          onChange={(newMaxValue) => onChange([minValue, newMaxValue])}
          onPressEnter={() => onChange(cacheValue)}
          onBlur={() => onChange(cacheValue)}
        />
      </div>
    </>
  );
};

export default NumberFilterValue;
