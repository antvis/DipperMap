import React, { useEffect } from 'react';
import type { ILineLayer, ILineLayerConfig } from '../../typings';
import { Form, Select } from 'antd';
import FieldSelect from '../FieldSelect';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import RangeWrapper from './components/RangeWrapper/index';
import ColorWrapper from './components/ColorWrapper/index';
import { LINE_TYPE_LIST } from '../../constants';
import LayerBlend from './components/LayerBlend';
import EdgeBundling from './components/EdgeBundling';
import FormSlider from './components/FormSlider';
import { FORM_LAYOUT } from './common';

interface IProps {
  layer: ILineLayer;
  onChange: (newLayer: ILineLayer) => void;
}

const LineLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<ILineLayerConfig>();
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

      <Form.Item label="线段类型" name="lineType">
        <Select options={LINE_TYPE_LIST} />
      </Form.Item>

      <Form.Item label="起点经度" name="startLngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="起点纬度" name="startLatField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="终点经度" name="endLngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="终点纬度" name="endLatField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      {/* <EdgeBundling form={form} /> */}
      <ColorWrapper
        label="颜色"
        field="color"
        form={form}
        fields={targetDatasetFields}
        range
        title="展示更多"
      />

      <RangeWrapper
        label="线宽"
        field="lineWidth"
        form={form}
        fields={targetDatasetFields}
        title="展示更多"
      />

      <FormSlider />

      <LayerBlend />
    </Form>
  );
};

export default LineLayer;
