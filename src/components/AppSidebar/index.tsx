import React, { Ref, useState } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

interface IProps {
  className?: string;
  ref: Ref<HTMLDivElement>;
}

const AppSidebar: React.FC<IProps> = React.forwardRef(
  ({ className = '', children }, ref: Ref<HTMLDivElement>) => {
    const [isHidden, setIsHidden] = useState(false);

    return (
      // @ts-ignore
      <div
        ref={ref}
        className={classnames([styles.appSidebarContainer, className])}
      >
        <div
          className={classnames({
            [styles.appSidebar]: true,
            [styles.appSidebarHidden]: isHidden,
          })}
        >
          {children}
        </div>
        <Button
          className={styles.appSidebarToggleBtn}
          icon={isHidden ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
    );
  },
);

export default AppSidebar;
