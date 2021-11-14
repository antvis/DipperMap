import React, { useEffect } from 'react';
import LayerTypeSelect from './components/LayerTypeSelect';
import { Form } from 'antd';
import type { IHexLayer, IHexLayerConfig } from '../../typings';
import useCommonHook from './components/commonHook';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import LayerBlend from './components/LayerBlend';
import LayerOpacity from './components/LayerOpacity';

interface IProps {
  layer: IHexLayer;
  onChange: (newLayer: IHexLayer) => void;
}

const HexLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IHexLayerConfig>();
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
      <Form.Item label="基础" colon={false} className="titleFormItem" />

      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item label="hexId" name="hexId">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <ColorWrapper
        label="颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      <LayerOpacity />

      <LayerBlend />
    </Form>
  );
};

export default HexLayer;
