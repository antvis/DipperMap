import React, { useCallback, useState } from 'react';
import { Popover } from 'antd';
import { SketchPicker } from 'react-color';
import styles from './index.less';
import classnames from 'classnames';

interface IProps {
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function Index({ value, disabled, onChange }: IProps) {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const onColorChange = useCallback(
    (e: any) => {
      const {
        rgb: { a, b, g, r },
      } = e;
      onChange?.(`rgba(${r}, ${g}, ${b}, ${a})`);
    },
    [onChange],
  );
  const onClick = useCallback(
    (e: any) => {
      if (value) {
        setPopoverVisible(true);
      }
      if (disabled) {
        e.stopPropagation();
      }
    },
    [disabled, value],
  );
  const popoverMouseLeave = () => {
    setPopoverVisible(false);
  };

  return disabled ? (
    <div
      className={classnames([styles.colorBlock, styles.colorBlockDisabled])}
      onClick={onClick}
    >
      <div
        className={styles.colorInnerBlock}
        style={{ backgroundColor: value }}
      />
    </div>
  ) : (
    <Popover
      placement="right"
      trigger="click"
      overlayClassName={styles.colorPopover}
      visible={popoverVisible}
      content={
        <div onMouseLeave={popoverMouseLeave}>
          <SketchPicker color={value} onChangeComplete={onColorChange} />
        </div>
      }
    >
      <div
        className={classnames({ [styles.colorBlock]: true })}
        onClick={onClick}
      >
        <div
          className={styles.colorInnerBlock}
          style={{ backgroundColor: value }}
        />
      </div>
    </Popover>
  );
}
