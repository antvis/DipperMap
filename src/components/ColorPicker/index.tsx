import * as React from 'react';
import { Button, Popover } from 'antd';
import { SketchPicker } from 'react-color';
import styles from './index.less';
import { useEffect } from 'react';
import { DEFAULT_COLOR1 } from '../../constants';

interface IProps {
  value?: string;
  disable?: boolean;
  onChange?: (color: string) => void;
}

const presetColors = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E8684A',
  '#6DC8EC',
  '#9270CA',
  '#FF9D4D',
  '#269A99',
  '#FF99C3',
  '#A9ABB1',
];

export const ColorPicker = React.memo((props: IProps) => {
  const { onChange, value, disable = false } = props;
  const onChangeComplete = React.useCallback(
    (color) => {
      onChange?.(color.hex);
    },
    [onChange, value],
  );

  useEffect(() => {
    if (typeof value !== 'string') {
      onChange?.(DEFAULT_COLOR1);
    }
  }, [value]);

  return (
    <Button type="text" disabled={disable} style={{ padding: '0' }}>
      <Popover
        trigger="click"
        placement="left"
        overlayClassName={styles['color-picker-container']}
        content={
          <SketchPicker
            color={value}
            disableAlpha
            onChange={onChangeComplete}
            presetColors={presetColors}
          />
        }
      >
        <div className={styles['sketch-color']}>
          <div
            className={styles['pasta-color-icon']}
            style={{ background: value }}
          ></div>
        </div>
      </Popover>
    </Button>
  );
});
