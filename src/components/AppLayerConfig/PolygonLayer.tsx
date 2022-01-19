import React, { useEffect } from 'react';
import { Form, Select } from 'antd';
import type { IPolygonLayer, IPolygonLayerConfig } from '../../typings';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import RangeWrapper from './components/RangeWrapper';
import LayerBlend from './components/LayerBlend';
import FormSlider from './components/FormSlider';
import { FORM_LAYOUT, GEO_JSON_TOOLTIP } from './common';
import { POLYGON_TYPE_LIST } from '../../constants';
import GeoFieldWrapper from './components/GeoFieldWrapper';

interface IProps {
  layer: IPolygonLayer;
  onChange: (newLayer: IPolygonLayer) => void;
}

const PolygonLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IPolygonLayerConfig>();
  const { targetDataset, targetDatasetFields, onFormChange } = useCommonHook(
    form,
    layer,
    onChange,
  );

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [form, layer.config]);

  return (
    <Form
      {...FORM_LAYOUT}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <Form.Item label="基础" colon={false} className="titleFormItem" />

      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item label="面类型" name="shape">
        <Select options={POLYGON_TYPE_LIST} placeholder="暂未选择字段" />
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(pre, cur) => {
          return pre?.shape !== cur?.shape;
        }}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('shape') === 'extrude' && (
              <>
                <Form.Item label="高度字段" name="intenseField">
                  <FieldSelect fields={targetDatasetFields} allowClear />
                </Form.Item>
                <FormSlider label="高度" name="intense" />
              </>
            )
          );
        }}
      </Form.Item>

      <GeoFieldWrapper dataset={targetDataset}>
        <Form.Item label="Geojson" name="geoField" tooltip={GEO_JSON_TOOLTIP}>
          <FieldSelect fields={targetDatasetFields} />
        </Form.Item>
      </GeoFieldWrapper>

      <ColorWrapper
        label="填充颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      <Form.Item
        noStyle
        shouldUpdate={(pre, cur) => {
          return pre?.shape !== cur?.shape;
        }}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('shape') !== 'extrude' && (
              <>
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
              </>
            )
          );
        }}
      </Form.Item>

      <LayerBlend />
    </Form>
  );
};
export default PolygonLayer;
