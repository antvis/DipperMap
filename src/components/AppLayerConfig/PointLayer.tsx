import React, { useEffect, useState } from 'react';
import type { IPointLayer, IPointLayerConfig } from '../../typings';
import { Form, Input, Select } from 'antd';
import FieldSelect from '../FieldSelect';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import RangeWrapper from './components/RangeWrapper/index';
import ColorWrapper from './components/ColorWrapper/index';
import LayerBlend from './components/LayerBlend';
import { POINT_TO_SQUARE_LIMIT } from '../../constants';
import LayerOpacity from './components/LayerOpacity';

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

  const SHAPES = [
    {
      label: '2D点图',
      value: 'circle',
    },
    {
      label: '3D柱图',
      value: 'cylinder',
    },
  ];

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

      {/*<Form.Item label="线段类型" name="shape">*/}
      {/*  <Select options={SHAPES} placeholder="暂未选择字段" />*/}
      {/*</Form.Item>*/}

      <Form.Item label="经度" name="lngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="纬度" name="latField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      {/*<Form.Item label="高度维度" name="magField">*/}
      {/*  <FieldSelect fields={targetDatasetFields} />*/}
      {/*</Form.Item>*/}
      {/*<Form.Item label="高度" name="size">*/}
      {/*  <Input />*/}
      {/*</Form.Item>*/}

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

      <LayerOpacity />

      <LayerBlend />
    </Form>
  );
};

export default PointLayer;
