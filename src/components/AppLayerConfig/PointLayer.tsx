import React, { useEffect } from 'react';
import type { IPointLayer, IPointLayerConfig } from '../../typings';
import { Form } from 'antd';
import FieldSelect from '../FieldSelect';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import RangeWrapper from './components/RangeWrapper/index';
import ColorWrapper from './components/ColorWrapper/index';
import LayerBlend from './components/LayerBlend';

interface IProps {
  layer: IPointLayer;
  onChange: (newLayer: IPointLayer) => void;
}

const PointLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IPointLayerConfig>();
  const { targetDatasetFields, onFormChange } = useCommonHook(layer, onChange);

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [layer.config]);

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 19 }}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item label="经度" name="lngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="纬度" name="latField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <ColorWrapper
        label="填充颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      <RangeWrapper
        label="半径"
        field="radius"
        form={form}
        fields={targetDatasetFields}
      />

      <LayerBlend />
    </Form>
  );
};

export default PointLayer;
