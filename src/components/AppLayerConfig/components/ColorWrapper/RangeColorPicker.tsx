import React from 'react';
import styles from '../../index.less';
import { DEFAULT_COLOR1 } from '../../../../constants';
import { ColorPicker } from '../../../ColorPicker';

interface IProps {
  value?: [string, string];
  onChange?: (newValue: [string, string]) => void;
}

const RangeColorPicker = ({
  value = [DEFAULT_COLOR1, DEFAULT_COLOR1],
  onChange,
}: IProps) => {
  return (
    <div className={styles.splitPanel} style={{ marginBottom: 8 }}>
      <ColorPicker
        value={value[0]}
        onChange={(newStartColor) =>
          onChange?.([newStartColor as string, value[1]])
        }
      />
      <ColorPicker
        value={value[1]}
        onChange={(newEndColor) =>
          onChange?.([value[0], newEndColor as string])
        }
      />
    </div>
  );
};

export default RangeColorPicker;
