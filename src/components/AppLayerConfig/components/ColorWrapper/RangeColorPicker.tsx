import React from 'react';
import styles from '../../index.less';
import { ColorPicker } from '@alipay/tech-ui';
import { DEFAULT_COLOR } from '../../../../constants';

interface IProps {
  value?: [string, string];
  onChange?: (newValue: [string, string]) => void;
}

const RangeColorPicker = ({ value = [DEFAULT_COLOR, DEFAULT_COLOR], onChange }: IProps) => {
  return (
    <div className={styles.splitPanel}>
      <ColorPicker
        type="sketch"
        value={value[0]}
        onChange={(newStartColor) => onChange?.([newStartColor as string, value[1]])}
      />
      <ColorPicker
        type="sketch"
        value={value[1]}
        onChange={(newEndColor) => onChange?.([value[0], newEndColor as string])}
      />
    </div>
  );
};

export default RangeColorPicker;
