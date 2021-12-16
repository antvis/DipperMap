import React from 'react';
import { Form, Slider } from 'antd';
import { LAYER_SLIDER_RANGE } from '../../../constants';

interface IProps {
  label?: string;
  name?: string;
  value?: number;
  max?: number;
  min?: number;
  onChange?: (newBlend: number) => void;
}

const [minValue, maxValue] = LAYER_SLIDER_RANGE;

const FormSlider: React.FC<IProps> = ({
  label = '透明度',
  name = 'opacity',
  max = maxValue,
  min = minValue,
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
      {/*<InputNumber*/}
      {/*  style={{ width: '100%' }}*/}
      {/*  value={value}*/}
      {/*  onChange={onChange}*/}
      {/*></InputNumber>*/}
    </Form.Item>
  );
};

export default FormSlider;
