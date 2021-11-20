import React from 'react';
import type { IFilter } from '../../typings';
import { Select, Switch } from 'antd';
import styles from './index.less';
import NumberFilterValue, { INumberFilterValue } from './NumberFilterValue';

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
        maxTagCount={2}
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
    content = (
      <NumberFilterValue
        value={value as INumberFilterValue}
        range={field.range}
        onChange={onChange}
      />
    );
  }

  return <div className={styles.filterValue}>{content}</div>;
};

export default FilterValue;
