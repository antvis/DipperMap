import React, { useMemo } from 'react';
import type { IDatasetField, IDatasetFieldType } from '../../typings';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { DATASET_FIELD_TYPE_COLOR } from '../../constants';

const { Option } = Select;

// @ts-ignore
interface IProps extends SelectProps<string | string[] | undefined> {
  value?: string | string[] | null;
  supportTypes?: IDatasetFieldType[];
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
  supportTypes = [],
  ...props
}: IProps) => {
  const displayFields = useMemo(() => {
    if (!supportTypes?.length) {
      return fields;
    }
    return fields?.filter((field) => {
      return supportTypes?.includes(field.type);
    });
  }, [fields, supportTypes]);

  return (
    <Select
      value={value ?? undefined}
      placeholder="暂未选择字段"
      className={styles.fieldSelect}
      onChange={(newValue: string | string[] | null = null) => {
        const targetField = displayFields.find(
          (item) => item.name === newValue,
        );
        onChange?.(newValue, targetField);
      }}
      {...props}
    >
      {displayFields.map((field) => (
        <Option
          key={field.name}
          value={field.name}
          className={styles.fieldSelectOption}
        >
          <Tag color={DATASET_FIELD_TYPE_COLOR[field.type]}>{field.type}</Tag>
          <span title={field.name}>{field.name}</span>
        </Option>
      ))}
    </Select>
  );
};

export default FieldSelect;
