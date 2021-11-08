import React, { useContext } from 'react';
import { GlobalModelContext } from '../../context/GlobalContext';
import styles from './index.less';
import classnames from 'classnames';

const Preview = () => {
  const { setIsPreview } = useContext(GlobalModelContext);

  return (
    <div
      className={classnames([styles.appControlItem, styles.appControlItemBtn])}
      onClick={() => setIsPreview(true)}
    >
      <i
        className={classnames([
          'dpiconfont',
          'dpicon-yulan',
          styles.appControlItemIcon,
        ])}
      />
      <span>预览</span>
    </div>
  );
};

export default Preview;
