import React, { useState } from 'react';
import styles from '../index.less';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import classnames from 'classnames';

interface IProps {
  icon?: JSX.Element;
  text: string;
  dropdown?: JSX.Element;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  onActiveChange?: (active: boolean) => void;
}

const AppControlItem: React.FC<IProps> = ({
  text,
  dropdown,
  icon,
  trigger = ['hover'],
  onActiveChange,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.appControlItem}>
      {dropdown ? (
        <Dropdown
          overlay={dropdown}
          arrow
          placement="bottomCenter"
          trigger={trigger}
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
            {icon && <span className={styles.appControlItemIcon}>{icon}</span>}
            {text}
            <DownOutlined />
          </div>
        </Dropdown>
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
