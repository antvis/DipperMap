import React from 'react';
import { Form, Slider } from 'antd';

interface IProps {
  value?: number;
  onChange?: (newBlend: number) => void;
}

const LayerBlend: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <Form.Item label="透明度" name="opacity">
      <Slider value={value} min={1} max={100} onAfterChange={onChange} />
    </Form.Item>
  );
};

export default LayerBlend;
