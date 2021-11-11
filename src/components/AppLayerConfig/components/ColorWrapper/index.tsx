import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Checkbox, Form } from 'antd';
import type { IDatasetField } from '../../../../typings';
import styles from '../../index.less';
import FieldSelect from '../../../FieldSelect';
import RangeColorPicker from './RangeColorPicker';
import FieldColorPicker from './FieldColorPicker';
import { ColorPicker } from '../../../ColorPicker';

interface IProps {
  label: string;
  field: string;
  range?: boolean;
  form: FormInstance;
  displayFieldCheckbox?: boolean;
  fields: IDatasetField[];
}

const ColorWrapper = ({
  label,
  form,
  field,
  fields,
  range = false,
  displayFieldCheckbox = true,
}: IProps) => {
  const [showField, setShowField] = useState(false);
  const colorField = form.getFieldValue([field, 'field']);

  return (
    <div className={styles.colorWrapper}>
      {displayFieldCheckbox && (
        <Checkbox
          className={styles.fieldFormCheckbox}
          checked={showField}
          onChange={(e) => setShowField(e.target.checked)}
        >
          基于字段
        </Checkbox>
      )}
      <Form.Item
        noStyle
        shouldUpdate={(pre, cur) => pre?.[field]?.field !== cur?.[field]?.field}
      >
        {() => {
          let content: JSX.Element = <></>;

          if (!colorField) {
            content = range ? <RangeColorPicker /> : <ColorPicker />;
          } else {
            content = <FieldColorPicker />;
          }

          return (
            <Form.Item
              label={label}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name={[field, 'value']}
            >
              {content}
            </Form.Item>
          );
        }}
      </Form.Item>
      {showField && (
        <Form.Item label="基于字段" name={[field, 'field']}>
          <FieldSelect fields={fields} allowClear />
        </Form.Item>
      )}
    </div>
  );
};

export default ColorWrapper;
