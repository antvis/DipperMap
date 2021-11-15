import React, { useState } from 'react';
import styles from '../index.less';
import { Popover } from 'antd';
import classnames from 'classnames';

interface IProps {
  icon?: JSX.Element;
  text?: string;
  title?: string;
  dropdown?: JSX.Element;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  onActiveChange?: (active: boolean) => void;
}

const AppControlItem: React.FC<IProps> = ({
  text,
  dropdown,
  title,
  icon,
  trigger = ['click'],
  onActiveChange,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.appControlItem} title={title}>
      {dropdown ? (
        <Popover
          content={dropdown}
          placement="leftTop"
          trigger={trigger}
          overlayClassName={styles.controlItemOverlay}
          onVisibleChange={(visible) => {
            setActive(visible);
            onActiveChange?.(visible);
          }}
        >
          <div
            className={classnames({
              [styles.appControlItemName]: true,
              [styles.appControlItemNameActive]: active,
            })}
          >
            {icon && <span>{icon}</span>}
            {text}
          </div>
        </Popover>
      ) : (
        <div
          className={classnames({
            [styles.appControlItemName]: true,
            [styles.appControlItemNameActive]: active,
          })}
          onClick={() => {
            onActiveChange?.(!active);
            setActive(!active);
          }}
        >
          {icon && <span className={styles.appControlItemIcon}>{icon}</span>}
          {text}
        </div>
      )}
    </div>
  );
};

export default AppControlItem;
