import React, { useEffect, useMemo, useState } from 'react';
import { Select, Form } from 'antd';
// @ts-ignore
import COLOR_LIST_MAP from './config.json';
import { isEqual } from 'lodash';
import styles from './index.less';

const { Option } = Select;

interface IProps {
  value?: string[];
  onChange?: (newValue: string[]) => void;
}

const FieldColorPicker: React.FC<IProps> = ({ value, onChange }) => {
  const colorTypeOptions = useMemo(() => {
    return Object.keys(COLOR_LIST_MAP).map((item) => {
      return {
        label: item,
        value: item,
      };
    });
  }, []);

  const [colorType, setColorType] = useState(() => {
    const targetType = colorTypeOptions.find((option) =>
      COLOR_LIST_MAP[option.value].find((colorList: string[]) => isEqual(colorList, value)),
    );
    return targetType?.value || colorTypeOptions[0].value;
  });

  const colorList = useMemo(() => {
    return COLOR_LIST_MAP[colorType] || [];
  }, [colorType]);

  useEffect(() => {
    if (!colorList.find((item: string[]) => isEqual(item, value))) {
      onChange?.(colorList[0]);
    }
  }, [value, colorList, onChange]);

  return (
    <>
      <Form.Item label="颜色类型" labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
        <Select value={colorType} onChange={setColorType} options={colorTypeOptions} />
      </Form.Item>

      <Form.Item label="颜色区间" labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
        <Select
          value={JSON.stringify(value)}
          onChange={(newValue) => {
            onChange?.(JSON.parse(newValue) as string[]);
          }}
        >
          {colorList.map((item: string[], index: number) => (
            <Option key={index} value={JSON.stringify(item)}>
              <div className={styles.colorList}>
                {item?.map((color) => (
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
};

export default FieldColorPicker;
