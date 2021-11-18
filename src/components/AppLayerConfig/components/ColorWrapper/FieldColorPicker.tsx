import React, { useEffect, useMemo, useState } from 'react';
import { Select, Form } from 'antd';
import { isEqual } from 'lodash';
import styles from './index.less';
import { FORM_LAYOUT } from '../../common';
import { COLOR } from '../../../../constants';

const { Option } = Select;

interface IProps {
  field: string;
  colorList: {
    index: number;
    colors: string[];
  }[];
}

const FieldColorPicker: React.FC<IProps> = ({ field, colorList = [] }) => {
  const colorTypeOptions = useMemo(() => {
    return Object.keys(COLOR).map((item) => {
      return {
        label: item,
        value: item,
      };
    });
  }, []);

  return (
    <>
      <Form.Item label="类型" {...FORM_LAYOUT} name="colorType">
        <Select options={colorTypeOptions} />
      </Form.Item>

      <Form.Item label="区间" {...FORM_LAYOUT} name={field}>
        <Select className={styles.fieldColorSelect} suffixIcon={<></>}>
          {colorList.map((item, index) => (
            <Option key={index} value={item.index}>
              <div className={styles.colorList}>
                {item.colors.map((color) => (
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
