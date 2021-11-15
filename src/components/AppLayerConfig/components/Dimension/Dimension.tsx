import { Form, FormInstance } from 'antd';
import React from 'react';
import FieldSelect from '../../../FieldSelect';
import { IDatasetField } from '../../../../typings';
import FieldRange from './FieldRange';

interface IProps {
  field: string;
  fields: IDatasetField[];
  form: FormInstance;
}

const Dimension = ({ field, fields, form }: IProps) => {
  const fieldType = ['extrude', 'cylinder', 'hexagonColumn', 'heatmap3D'];

  const height3D = form.getFieldsValue(['dimensionType']);
  const height3DVisible = fieldType.includes(height3D.dimensionType);
  return (
    <>
      {height3DVisible && (
        <div>
          <Form.Item
            label="3D高度"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name={[field, 'rangeValue']}
          >
            {/* <FieldRange /> */}
          </Form.Item>
          {
            <Form.Item label="基于字段" name={[field, 'field']}>
              <FieldSelect fields={fields} allowClear />
            </Form.Item>
          }
        </div>
      )}
    </>
  );
};

export default Dimension;
