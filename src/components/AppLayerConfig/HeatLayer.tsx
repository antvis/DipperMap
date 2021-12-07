import React, { useEffect } from 'react';
import LayerTypeSelect from './components/LayerTypeSelect';
import { Form, Select } from 'antd';
import type {
  IDatasetNumberField,
  IHeatLayer,
  IHeatLayerConfig,
} from '../../typings';
import useCommonHook from './components/commonHook';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import FormSlider from './components/FormSlider';
import { FORM_LAYOUT } from './common';
import { HEAT_TYPE_LIST } from '../../constants';
import { cloneDeep } from 'lodash';

interface IProps {
  layer: IHeatLayer;
  onChange: (newLayer: IHeatLayer) => void;
}

const HeatLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IHeatLayerConfig>();
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
      <Form.Item label="视角" name="shape">
        <Select options={HEAT_TYPE_LIST} />
      </Form.Item>
      <Form.Item label="经度" name="lngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>
      <Form.Item label="纬度" name="latField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>
      <Form.Item label="数值" name="magField">
        <FieldSelect
          fields={targetDatasetFields}
          supportTypes={['number']}
          onChange={(newField) => {
            const targetField = targetDatasetFields.find(
              (field) => field.name === newField,
            ) as IDatasetNumberField | undefined;
            if (targetField) {
              form.setFieldsValue({
                ranges: cloneDeep(targetField.range),
              });
            }
          }}
        />
      </Form.Item>
      <ColorWrapper
        label="颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
        forceField
        displayFieldCheckbox={false}
      />
      <FormSlider label="半径" name="radius" />
      <FormSlider label="强度" name="intensity" />
    </Form>
  );
};

export default HeatLayer;
