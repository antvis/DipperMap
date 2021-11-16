import React, { useEffect, useState } from 'react';
import type { IPointLayer, IPointLayerConfig } from '../../typings';
import { Form, Input, Select } from 'antd';
import FieldSelect from '../FieldSelect';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import RangeWrapper from './components/RangeWrapper/index';
import ColorWrapper from './components/ColorWrapper/index';
import LayerBlend from './components/LayerBlend';
import { POINT_TO_SQUARE_LIMIT, POINT_TYPE_LIST } from '../../constants';
import FormSlider from './components/FormSlider';
import { FORM_LAYOUT } from './common';
import GeoFieldWrapper from './components/GeoFieldWrapper';

interface IProps {
  layer: IPointLayer;
  onChange: (newLayer: IPointLayer) => void;
}

const PointLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<IPointLayerConfig>();
  const { targetDataset, targetDatasetFields, onFormChange } = useCommonHook(
    layer,
    onChange,
  );
  const [disableRange, setDisableRange] = useState(false);

  useEffect(() => {
    const disable = (targetDataset?.data.length ?? 0) > POINT_TO_SQUARE_LIMIT;
    setDisableRange(disable);
    if (disable) {
      form.setFieldsValue({
        radius: {
          value: 1,
          rangeValue: [1, 10],
          field: null,
        },
      });
    }
  }, [targetDataset?.data.length]);

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

      <Form.Item label="线段类型" name="shape">
        <Select options={POINT_TYPE_LIST} placeholder="暂未选择字段" />
      </Form.Item>

      <GeoFieldWrapper dataset={targetDataset}>
        <Form.Item label="经度" name="lngField">
          <FieldSelect fields={targetDatasetFields} />
        </Form.Item>

        <Form.Item label="纬度" name="latField">
          <FieldSelect fields={targetDatasetFields} />
        </Form.Item>
      </GeoFieldWrapper>

      {form.getFieldValue('shape') === 'cylinder' ? (
        <>
          <Form.Item label="高度维度" name="magField">
            <FieldSelect fields={targetDatasetFields} />
          </Form.Item>
          <FormSlider label="高度" name="size" />
        </>
      ) : null}

      <ColorWrapper
        label="颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      {disableRange ? (
        <Form.Item
          label="半径"
          tooltip={`数据量超过${POINT_TO_SQUARE_LIMIT}时，无法设置半径，否则可能会导致系统崩溃`}
        >
          <Input value={1} disabled />
        </Form.Item>
      ) : (
        <RangeWrapper
          label="半径"
          field="radius"
          form={form}
          fields={targetDatasetFields}
        />
      )}

      <FormSlider />

      <LayerBlend />
    </Form>
  );
};

export default PointLayer;
