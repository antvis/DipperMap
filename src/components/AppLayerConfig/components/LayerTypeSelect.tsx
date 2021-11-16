import { Form, Select } from 'antd';
import React, { useMemo } from 'react';
import type { IBaseLayer, IDataset } from '../../../typings';
import { getLayerTypes } from '../common';

interface IProps<P> {
  dataset?: IDataset | null;
  layer: P;
  onChange: (newLayer: P) => void;
}

function LayerTypeSelect<P extends IBaseLayer>({
  layer,
  onChange,
  dataset,
}: IProps<P>) {
  const options = useMemo(() => getLayerTypes(dataset), [dataset]);

  return (
    <Form.Item label="类型:">
      <Select
        value={layer.type}
        options={options}
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
