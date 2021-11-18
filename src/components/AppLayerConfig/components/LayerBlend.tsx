import React from 'react';
import { Form, Select } from 'antd';
import { IBlendType } from '../../../typings';
import { BLEND_TYPE_LIST } from '../../../constants';
import styles from '../index.less';

interface IProps {
  value?: IBlendType;
  onChange?: (newBlend: IBlendType) => void;
}

const LayerBlend: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <Form.Item
      label="叠加模式"
      name="blendType"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      className="titleFormItem"
    >
      <Select value={value} onChange={onChange} options={BLEND_TYPE_LIST} />
    </Form.Item>
  );
};

export default LayerBlend;
