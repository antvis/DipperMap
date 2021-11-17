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
import { COLOR, POLYGON_TYPE_LIST } from '../../constants';
import GeoFieldWrapper from './components/GeoFieldWrapper';
import FieldColorPicker from './components/ColorWrapper/FieldColorPicker';

interface IProps {
  layer: IPolygonLayer;
  onChange: (newLayer: IPolygonLayer) => void;
}

const PolygonLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IPolygonLayerConfig>();
  const { targetDataset, targetDatasetFields, onFormChange } = useCommonHook(
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
      <GeoFieldWrapper dataset={targetDataset}>
        <Form.Item label="Geojson" name="geoField" tooltip={GEO_JSON_TOOLTIP}>
          <FieldSelect fields={targetDatasetFields} />
        </Form.Item>
      </GeoFieldWrapper>
      <FieldColorPicker
        field="fillColor"
        colorList={COLOR[form.getFieldValue('colorType')]}
      />
      <Form.Item label="颜色字段" name="fillColorField">
        <FieldSelect fields={targetDatasetFields} allowClear />
      </Form.Item>

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
      <Form.Item label="高度字段" name="intenseField">
        <FieldSelect fields={targetDatasetFields} allowClear />
      </Form.Item>
      <FormSlider label="高度" name="intense" max={10e7} />
      <LayerBlend />
    </Form>
  );
};
export default PolygonLayer;
