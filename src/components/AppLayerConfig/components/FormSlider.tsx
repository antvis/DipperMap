import React from 'react';
import { Form, Slider } from 'antd';

interface IProps {
  label?: string;
  name?: string;
  value?: number;
  onChange?: (newBlend: number) => void;
}

const FormSlider: React.FC<IProps> = ({
  label = '透明度',
  name = 'opacity',
  value,
  onChange,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      className="titleFormItem"
    >
      <Slider value={value} min={1} max={100} onChange={onChange} />
    </Form.Item>
  );
};

export default FormSlider;
