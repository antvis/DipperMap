import React, { useContext } from 'react';
import { GlobalModelContext } from '../../context/GlobalContext';
import styles from './index.less';
import classnames from 'classnames';
import { message } from 'antd';
import { useKeyPress } from 'ahooks';

const Preview = () => {
  const { setIsPreview } = useContext(GlobalModelContext);

  const openPreview = () => {
    setIsPreview(true);
    message.info('按ESC键即可退出预览', 1);
  };

  useKeyPress('esc', () => {
    setIsPreview(false);
  });

  return (
    <div
      className={classnames([styles.appControlItem, styles.appControlItemBtn])}
      onClick={openPreview}
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
