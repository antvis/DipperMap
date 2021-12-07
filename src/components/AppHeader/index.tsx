import React from 'react';
import styles from './index.less';
import { Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const AppHeader: React.FC = () => {
  return (
    <>
      <div className={styles.appHeader}>
        <img
          src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*95whQ7WhQBIAAAAAAAAAAAAAARQnAQ"
          alt=""
        />
        <div>
          <a
            href="https://antv.vision/DipperMap/"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip overlay="帮助文档">
              <Button type="text" icon={<QuestionCircleOutlined />} />
            </Tooltip>
          </a>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
