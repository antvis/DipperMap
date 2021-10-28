import React from 'react';
import { Typography, Button, Tooltip, Space } from 'antd';
import styles from './index.less';
// @ts-ignore
import logo from '../../assets/imgs/logo.png';
import { ExportOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <Space align="center">
        <img src={logo} />
        <Title level={5}>地光数据可视化平台</Title>
      </Space>
      <Space align="center">
        <Tooltip overlay="导出">
          <Button size="small" type="text" icon={<ExportOutlined />} />
        </Tooltip>
      </Space>
    </div>
  );
};

export default AppHeader;
