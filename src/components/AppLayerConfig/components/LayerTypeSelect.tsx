import { Form, Select } from 'antd';
import { LAYER_TYPE_LIST } from '../../../constants';
import React from 'react';
import type { IBaseLayer } from '../../../typings';

interface IProps<P> {
  layer: P;
  onChange: (newLayer: P) => void;
}

function LayerTypeSelect<P extends IBaseLayer>({ layer, onChange }: IProps<P>) {
  return (
    <Form.Item label="类型:">
      <Select
        value={layer.type}
        options={LAYER_TYPE_LIST}
        onChange={(type) =>
          onChange({
            ...layer,
            type,
          })
        }
      />
    </Form.Item>
  );
}
export default LayerTypeSelect;
