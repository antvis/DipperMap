import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Checkbox, Form } from 'antd';
import type {
  IDatasetField,
  ILayerDoubleColor,
  ILayerFieldColor,
  ILayerSingleColor,
} from '../../../../typings';
import styles from '../../index.less';
import FieldSelect from '../../../FieldSelect';
import RangeColorPicker from './RangeColorPicker';
import FieldColorPicker from './FieldColorPicker';
import { ColorPicker } from '../../../ColorPicker';
import { DEFAULT_COLOR1, DEFAULT_COLOR2 } from '../../../../constants';

interface IProps {
  label: string;
  field: string;
  range?: boolean;
  forceField?: boolean;
  form: FormInstance;
  displayFieldCheckbox?: boolean;
  fields: IDatasetField[];
  title?: string;
}

const ColorWrapper = ({
  label,
  field,
  fields,
  form,
  range = false,
  forceField = false,
  displayFieldCheckbox = true,
  title = '基于字段',
}: IProps) => {
  const [showField, setShowField] = useState(false);

  return (
    <div className={styles.colorWrapper}>
      {displayFieldCheckbox && (
        <Checkbox
          className={styles.fieldFormCheckbox}
          checked={showField}
          onChange={(e) => setShowField(e.target.checked)}
        >
          {title}
        </Checkbox>
      )}
      <Form.Item
        noStyle
        shouldUpdate={(pre, cur) => pre?.[field]?.field !== cur?.[field]?.field}
      >
        {({ getFieldValue }) => {
          const colorField = getFieldValue([field, 'field']);
          let content: JSX.Element = <></>;

          if (forceField || colorField) {
            content = <FieldColorPicker field={field} />;
          } else {
            content = range ? <RangeColorPicker /> : <ColorPicker />;
          }

          return (
            <Form.Item
              className="titleFormItem"
              label={label}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name={colorField ? field : [field, 'value']}
            >
              {content}
            </Form.Item>
          );
        }}
      </Form.Item>
      {showField && (
        <Form.Item label="基于字段" name={[field, 'field']}>
          <FieldSelect
            fields={fields}
            allowClear
            onChange={(newField?: string | string[] | null) => {
              let fieldColor:
                | ILayerFieldColor
                | ILayerSingleColor
                | ILayerDoubleColor = range
                ? {
                    value: [DEFAULT_COLOR1, DEFAULT_COLOR2],
                    enable: true,
                  }
                : {
                    value: DEFAULT_COLOR1,
                    enable: true,
                  };
              if (newField) {
                fieldColor = {
                  // value: COLOR.sequential[0].colors,
                  colorType: 'sequential',
                  colorIndex: 0,
                  field: newField as string,
                  enable: true,
                };
              }

              form.setFieldsValue({
                [field]: fieldColor,
              });
            }}
          />
        </Form.Item>
      )}
    </div>
  );
};

export default ColorWrapper;
