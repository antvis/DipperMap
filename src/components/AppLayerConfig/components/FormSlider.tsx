import React from 'react';
import { Form, Slider } from 'antd';

interface IProps {
  label?: string;
  name?: string;
  value?: number;
  max?: number;
  min?: number;
  onChange?: (newBlend: number) => void;
}

const FormSlider: React.FC<IProps> = ({
  label = '透明度',
  name = 'opacity',
  max = 100,
  min = 1,
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
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </Form.Item>
  );
};

export default FormSlider;
