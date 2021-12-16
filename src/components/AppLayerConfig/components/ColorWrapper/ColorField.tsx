import React from 'react';
import FieldSelect from '../../../FieldSelect';
import { IDatasetField } from '../../../../typings';
import { Form } from 'antd';

interface IProps {
  value?: string;
  onChange?: (newValue?: string | null) => void;
  field: string;
  range?: boolean;
  fields: IDatasetField[];
}

const ColorField: React.FC<IProps> = ({ field, fields = [] }) => {
  return (
    <Form.Item label="展示更多" name={[field, 'field']}>
      <FieldSelect
        fields={fields}
        allowClear
        onChange={(field?: string | string[] | null) => {
          console.log(field);
        }}
      />
    </Form.Item>
  );
};

export default ColorField;
