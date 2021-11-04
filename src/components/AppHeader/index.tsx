import React, { Ref } from 'react';
import { Typography, Space } from 'antd';
import styles from './index.less';
// @ts-ignore
import logo from '../../assets/imgs/logo.png';
// import { ExportOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface IProps {
  ref: Ref<HTMLDivElement>;
}

const AppHeader: React.FC<IProps> = React.forwardRef(
  ({}, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={styles.appHeader} ref={ref}>
        <Space align="center">
          <img src={logo} />
          <Title level={5}>地光数据可视化平台</Title>
        </Space>
        {/*<Space align="center">*/}
        {/*  <Tooltip overlay="导出">*/}
        {/*    <Button size="small" type="text" icon={<ExportOutlined />} />*/}
        {/*  </Tooltip>*/}
        {/*</Space>*/}
      </div>
    );
  },
);

export default AppHeader;
