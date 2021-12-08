import React from 'react';
import styles from './index.less';
import { Button, Dropdown, Menu } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { HELP_LINK_LIST } from '../../constants';

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
            overlayClassName={styles.appHeaderDropdown}
            overlay={
              <Menu>
                {HELP_LINK_LIST.map((item) => (
                  <Menu.Item
                    key={item.title}
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <span>{item.title}</span>
                    <i className="dpiconfont dpicon-tiaozhuan-zhuanqu" />
                  </Menu.Item>
                ))}
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
