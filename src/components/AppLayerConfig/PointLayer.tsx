import React, { useEffect, useState } from 'react';
import type { IPointLayer, IPointLayerConfig } from '../../typings';
import { Form, Input } from 'antd';
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

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 19 }}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item label="经度" name="lngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="纬度" name="latField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <ColorWrapper
        label="填充颜色"
        field="fillColor"
        form={form}
        fields={targetDatasetFields}
      />

      {disableRange ? (
        <Form.Item label="半径" tooltip="数据量过大，仅能使用散点图进行展示">
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
