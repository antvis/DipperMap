import React, { useCallback, useEffect, useMemo } from 'react';
import LayerTypeSelect from './components/LayerTypeSelect';
import { Form } from 'antd';
import type {
  IDatasetNumberField,
  IHeatLayer,
  IHeatLayerConfig,
} from '../../typings';
import useCommonHook from './components/commonHook';
import FieldSelect from '../FieldSelect';
import ColorWrapper from './components/ColorWrapper';
import RangeWrapper from './components/RangeWrapper';
import useDataset from '../../hooks/dataset';
import LayerBlend from './components/LayerBlend';
import LayerOpacity from './components/LayerOpacity';

interface IProps {
  layer: IHeatLayer;
  onChange: (newLayer: IHeatLayer) => void;
}

const HeatLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IHeatLayerConfig>();
  const { targetDatasetFields, onFormChange } = useCommonHook(layer, onChange);
  const { getTargetDataset } = useDataset();
  const targetDataset = useMemo(
    () => getTargetDataset(layer.datasetId),
    [layer.datasetId, getTargetDataset],
  );

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [layer.config]);

  const onFormValueChanged = useCallback(
    (changedValues: any) => {
      let ranges: number[] = [];
      if (changedValues.magField) {
        ranges = (
          targetDataset?.fields.find(
            (field) => field.name === changedValues.magField,
          ) as IDatasetNumberField
        ).range;
      }
      onFormChange({
        ...changedValues,
        ...(ranges.length && {
          ranges,
        }),
      });
    },
    [onFormChange, targetDataset],
  );

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 18 }}
      labelAlign="left"
      form={form}
      onValuesChange={onFormValueChanged}
    >
      <Form.Item label="基础" colon={false} className="titleFormItem" />
      <LayerTypeSelect layer={layer} onChange={onChange} />
      <Form.Item label="经度" name="lngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>
      <Form.Item label="纬度" name="latField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>
      <Form.Item label="数值" name="magField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>
      <ColorWrapper
        label="颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
        fieldColor
      />
      <RangeWrapper
        label="半径"
        field="radius"
        form={form}
        fields={targetDatasetFields}
      />

      <LayerOpacity />

      <LayerBlend />
    </Form>
  );
};

export default HeatLayer;
