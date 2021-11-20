import React, { useEffect } from 'react';
import type { ITripLayer, ITripLayerConfig } from '../../typings';
import LayerTypeSelect from './components/LayerTypeSelect';
import { Form } from 'antd';
import useCommonHook from './components/commonHook';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import RangeWrapper from './components/RangeWrapper';
import LayerBlend from './components/LayerBlend';
import FormSlider from './components/FormSlider';
import { FORM_LAYOUT, GEO_JSON_TOOLTIP } from './common';
import GeoFieldWrapper from './components/GeoFieldWrapper';

interface IProps {
  layer: ITripLayer;
  onChange: (newLayer: ITripLayer) => void;
}

const TripLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<ITripLayerConfig>();
  const { targetDataset, targetDatasetFields, onFormChange } = useCommonHook(
    form,
    layer,
    onChange,
  );

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [layer.config]);

  return (
    <Form
      {...FORM_LAYOUT}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <Form.Item label="基础" colon={false} className="titleFormItem" />

      <LayerTypeSelect
        dataset={targetDataset}
        layer={layer}
        onChange={onChange}
      />

      <GeoFieldWrapper dataset={targetDataset}>
        <Form.Item label="Geojson" name="geoField" tooltip={GEO_JSON_TOOLTIP}>
          <FieldSelect fields={targetDatasetFields} />
        </Form.Item>
      </GeoFieldWrapper>

      <ColorWrapper
        label="颜色"
        field="color"
        form={form}
        fields={targetDatasetFields}
        range
      />

      <RangeWrapper
        label="线宽"
        field="lineWidth"
        form={form}
        fields={targetDatasetFields}
      />

      <FormSlider />

      <LayerBlend />
    </Form>
  );
};

export default TripLayer;
