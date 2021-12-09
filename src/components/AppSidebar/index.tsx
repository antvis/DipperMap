import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface IProps {
  className?: string;
}

const AppSidebar: React.FC<IProps> = ({ className = '', children }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    // @ts-ignore
    <div
      className={classnames([
        styles.appSidebarContainer,
        isHidden ? styles.hide : styles.show,
        className,
      ])}
    >
      <div
        className={classnames({
          [styles.appSidebar]: true,
        })}
      >
        {children}
        <div
          className={styles.appSidebarToggleBtn}
          onClick={() => setIsHidden(!isHidden)}
        >
          <i
            className={classnames([
              'dpiconfont',
              isHidden ? 'dpicon-right' : 'dpicon-left',
            ])}
          />
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
