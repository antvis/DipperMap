import React from 'react';
import type { IDatasetField } from '../../typings';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { DATASET_FIELD_TYPE_COLOR } from '../../constants';

const { Option } = Select;

// @ts-ignore
interface IProps extends SelectProps<string | string[] | undefined> {
  value?: string | string[] | null;
  fields?: IDatasetField[];
  onChange?: (
    value?: string | string[] | null,
    field?: IDatasetField | null,
  ) => void;
}

const FieldSelect = ({
  value = undefined,
  fields = [],
  onChange,
  ...props
}: IProps) => {
  return (
    <Select
      value={value ?? undefined}
      placeholder="暂未选择字段"
      className={styles.filterSelect}
      onChange={(newValue: string | string[] | null = null) => {
        const targetField = fields.find((item) => item.name === newValue);
        onChange?.(newValue, targetField);
      }}
      {...props}
    >
      {fields.map((field) => (
        <Option
          key={field.name}
          value={field.name}
          className={styles.filterSelectOption}
        >
          <span title={field.name}>{field.name}</span>
          <Tag color={DATASET_FIELD_TYPE_COLOR[field.type]}>{field.type}</Tag>
        </Option>
      ))}
    </Select>
  );
};

export default FieldSelect;
