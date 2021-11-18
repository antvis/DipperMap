import { Form, FormInstance, InputNumber, Switch } from 'antd';
import React from 'react';

type Props = {
  form: FormInstance;
};
export default function EdgeBundling(props: Props) {
  return (
    <>
      <Form.Item
        label="开启边绑定"
        name="enableEdgeBundling"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item
        label="兼容度"
        name={['edgeBundling', 'compatibility']}
        initialValue={0.6}
      >
        <InputNumber min={0} max={1} step={0.01} />
      </Form.Item>

      <Form.Item
        label="步长"
        name={['edgeBundling', 'stepSize']}
        initialValue={0.001}
      >
        <InputNumber min={0} max={10} step={0.001} />
      </Form.Item>
    </>
  );
}
