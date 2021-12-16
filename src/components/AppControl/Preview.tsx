import React, { useContext } from 'react';
import { GlobalModelContext } from '../../context/GlobalContext';
import { message } from 'antd';
import { useKeyPress } from 'ahooks';
import AppControlItem from './common/AppControlItem';

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
    <AppControlItem
      icon={<i className="dpiconfont dpicon-quanpingyulan" />}
      onActiveChange={() => {
        openPreview();
      }}
    />
  );
};

export default Preview;
