import React, { useMemo } from 'react';
import { Select, Form } from 'antd';
import styles from './index.less';
import { FORM_LAYOUT } from '../../common';
import { FIELD_COLOR_MAP } from '../../../../constants';
import ErrorBoundary from '../../../ErrorBoundary';
import { IColorType } from '../../../../typings';

const { Option } = Select;

interface IProps {
  field: string;
}

const FieldColorPicker: React.FC<IProps> = ({ field }) => {
  const colorTypeOptions = useMemo(() => {
    return Object.keys(FIELD_COLOR_MAP).map((item) => {
      return {
        label: item,
        value: item,
      };
    });
  }, []);

  return (
    <ErrorBoundary>
      <Form.Item
        noStyle={true}
        shouldUpdate={(pre, cur) => {
          return pre?.[field]?.colorType !== cur?.[field]?.colorType;
        }}
      >
        {(form) => {
          const colorType: IColorType = form.getFieldValue([
            field,
            'colorType',
          ]);
          return (
            <>
              <Form.Item
                label="类型"
                {...FORM_LAYOUT}
                name={[field, 'colorType']}
              >
                <Select
                  options={colorTypeOptions}
                  onChange={() => {
                    form.setFields([
                      {
                        name: [field, 'colorIndex'],
                        value: 0,
                      },
                    ]);
                  }}
                />
              </Form.Item>
              <Form.Item
                label="颜色"
                {...FORM_LAYOUT}
                name={[field, 'colorIndex']}
              >
                <Select className={styles.fieldColorSelect} suffixIcon={null}>
                  {FIELD_COLOR_MAP[colorType]?.map((item, index) => (
                    <Option key={index} value={index}>
                      <div className={styles.colorList}>
                        {item.map((color) => (
                          <div
                            key={color}
                            className={styles.colorItem}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </>
          );
        }}
      </Form.Item>
    </ErrorBoundary>
  );
};

export default FieldColorPicker;
