import React from 'react';
import { Form, Select } from 'antd';
import { IBlendType } from '../../../typings';
import { BLEND_TYPE_LIST } from '../../../constants';

interface IProps {
  value?: IBlendType;
  onChange?: (newBlend: IBlendType) => void;
}

const LayerBlend: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <Form.Item label="叠加模式" name="blendType">
      <Select value={value} onChange={onChange} options={BLEND_TYPE_LIST} />
    </Form.Item>
  );
};

export default LayerBlend;
