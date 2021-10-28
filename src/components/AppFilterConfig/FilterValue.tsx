import React from 'react';
import type { IFilter } from '../../typings';
import { Select, Switch, Slider, InputNumber } from 'antd';
import styles from './index.less';

interface IProps extends Pick<IFilter, 'field' | 'value'> {
  onChange: (newValue: any) => void;
}

const FilterValue = (props: IProps) => {
  const { field, onChange, value } = props;
  if (!field) {
    return null;
  }

  let content: JSX.Element | null = null;

  if (field.type === 'boolean') {
    content = <Switch checked={value as boolean} onChange={onChange} />;
  }

  if (field.type === 'string') {
    content = (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        value={value as string[]}
        placeholder="请选择要筛选的值"
        allowClear
        options={field.uniqueValues.map((item: string) => ({
          label: item,
          value: item,
        }))}
        onChange={onChange}
      />
    );
  }

  if (field.type === 'number') {
    const [minRange, maxRange] = field.range;
    const [minValue, maxValue] = value as [number, number];
    content = (
      <>
        <Slider
          range
          step={1}
          value={value as [number, number]}
          min={minRange}
          max={maxRange}
          onAfterChange={onChange}
        />
        <div className={styles.inputRangePanel}>
          <InputNumber
            min={minRange}
            max={maxValue}
            value={minValue}
            onChange={(newMinValue) => onChange([newMinValue, maxValue])}
          />
          <InputNumber
            min={minValue}
            max={maxRange}
            value={maxValue}
            onChange={(newMaxValue) => onChange([minValue, newMaxValue])}
          />
        </div>
      </>
    );
  }

  return <div className={styles.filterValue}>{content}</div>;
};

export default FilterValue;
