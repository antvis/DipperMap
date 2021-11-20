import React from 'react';
import FieldSelect from '../../../FieldSelect';
import { IDatasetField, ILayerFieldColor } from '../../../../typings';
import { FIELD_COLOR_MAP } from '../../../../constants';
import { Form } from '_antd@4.16.13@antd';

interface IProps {
  value?: string;
  onChange?: (newValue?: string | null) => void;
  field: string;
  range?: boolean;
  fields: IDatasetField[];
}

const ColorField: React.FC<IProps> = ({
  value,
  onChange,
  range,
  field,
  fields = [],
}) => {
  return (
    <Form.Item label="展示更多" name={[field, 'field']}>
      <FieldSelect
        fields={fields}
        allowClear
        onChange={(field?: string | string[] | null) => {}}
      />
    </Form.Item>
  );
};

export default ColorField;
