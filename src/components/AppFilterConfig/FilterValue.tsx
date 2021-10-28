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
    const [min, max] = field.range;
    content = (
      <>
        <Slider
          range
          step={1}
          value={value as [number, number]}
          min={min}
          max={max}
          onAfterChange={onChange}
        />
        <div className={styles.inputRangePanel}>
          <InputNumber
            min={min}
            max={value[1]}
            value={value[0]}
            onChange={(newMinValue) => onChange([newMinValue, value[1]])}
          />
          <InputNumber
            min={value[0]}
            max={max}
            value={value[1]}
            onChange={(newMaxValue) => onChange([value[0], newMaxValue])}
          />
        </div>
      </>
    );
  }

  return <div className={styles.filterValue}>{content}</div>;
};

export default FilterValue;
