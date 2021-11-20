import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Form, Checkbox } from 'antd';
import FieldRange from './FieldRange';
import SingleRange from './SingleRange';
import FieldSelect from '../../../FieldSelect';
import type { IDatasetField } from '../../../../typings';
import styles from '../../index.less';

const RangeWrapper: React.FC<{
  label: string;
  field: string;
  form: FormInstance;
  fields: IDatasetField[];
  title?: string;
}> = ({ label, field, form, fields, title = '展示更多' }) => {
  const [showField, setShowField] = useState(false);

  const hasField = !!form.getFieldValue([field, 'field']);

  return (
    <div className={styles.rangeWrapper}>
      <Checkbox
        className={styles.fieldFormCheckbox}
        checked={showField}
        onChange={(e) => setShowField(e.target.checked)}
      >
        {title}
      </Checkbox>
      <Form.Item
        className="titleFormItem"
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name={[field, hasField ? 'rangeValue' : 'value']}
      >
        {hasField ? <FieldRange /> : <SingleRange />}
      </Form.Item>

      {showField && (
        <Form.Item
          label="展示更多"
          name={[field, 'field']}
          style={{ marginTop: 8 }}
        >
          <FieldSelect fields={fields} allowClear />
        </Form.Item>
      )}
    </div>
  );
};

export default RangeWrapper;
