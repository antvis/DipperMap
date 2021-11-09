import React, { useContext } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { GlobalModelContext } from '../../context/GlobalContext';

const ExitPreview = () => {
  const { setIsPreview } = useContext(GlobalModelContext);

  return (
    <Button className={styles.exitPreview} onClick={() => setIsPreview(false)}>
      退出预览
    </Button>
  );
};

export default ExitPreview;
