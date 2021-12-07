import React from 'react';
import { Space } from 'antd';
import styles from './index.less';

const AppHeader: React.FC = () => {
  return (
    <>
      <div className={styles.appHeader}>
        <Space align="center">
          <img
            src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*95whQ7WhQBIAAAAAAAAAAAAAARQnAQ"
            alt=""
          />
        </Space>
      </div>
    </>
  );
};

export default AppHeader;
