import React, { useEffect } from 'react';
import { Form } from 'antd';
import type { IPolygonLayer, IPolygonLayerConfig } from '../../typings';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import RangeWrapper from './components/RangeWrapper';
import LayerBlend from './components/LayerBlend';
import LayerOpacity from './components/LayerOpacity';
import styles from './index.less';

interface IProps {
  layer: IPolygonLayer;
  onChange: (newLayer: IPolygonLayer) => void;
}

const PolygonLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IPolygonLayerConfig>();
  const { targetDatasetFields, onFormChange } = useCommonHook(layer, onChange);

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [form, layer.config]);

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 18 }}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <Form.Item label="基础" colon={false} className="titleFormItem" />

      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item
        label="Geojson"
        name="geoField"
        tooltip={'请以","分隔经纬度，以";"分隔各点，如: 12.1,13.4;54.1,69.2...'}
      >
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <ColorWrapper
        label="填充颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      <ColorWrapper
        label="边框颜色"
        field="borderColor"
        form={form}
        fields={targetDatasetFields}
      />

      <RangeWrapper
        label="边框宽度"
        field="borderWidth"
        form={form}
        fields={targetDatasetFields}
      />

      <LayerOpacity />

      <LayerBlend />
    </Form>
  );
};
export default PolygonLayer;
