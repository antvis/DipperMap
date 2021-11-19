import { Form, FormInstance, InputNumber, Switch } from 'antd';
import React from 'react';

type Props = {
  form: FormInstance;
};
export default function EdgeBundling(props: Props) {
  const { form } = props;
  form.getFieldValue('enableEdgeBundling');
  return (
    <>
      <Form.Item
        label="开启边绑定"
        name="enableEdgeBundling"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      {!!form.getFieldValue('enableEdgeBundling') && (
        <Form.Item
          label="兼容度"
          name={['edgeBundling', 'compatibility']}
          initialValue={0.6}
        >
          <InputNumber min={0} max={1} step={0.01} />
        </Form.Item>
      )}
    </>
  );
}
