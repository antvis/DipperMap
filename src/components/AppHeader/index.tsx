import React from 'react';
import styles from './index.less';
import { Button, Dropdown, Menu } from 'antd';
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
          <Dropdown
            placement="bottomRight"
            overlay={
              <Menu>
                <Menu.Item
                  key="help"
                  onClick={() =>
                    window.open('https://antv.vision/DipperMap/', '_blank')
                  }
                >
                  帮助文档
                </Menu.Item>
                <Menu.Item
                  key="feedback"
                  onClick={() =>
                    window.open(
                      'https://github.com/antvis/DipperMap/issues',
                      '_blank',
                    )
                  }
                >
                  问题反馈
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="text" icon={<QuestionCircleOutlined />} />
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
