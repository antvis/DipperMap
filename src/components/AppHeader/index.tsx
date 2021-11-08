import React, { Ref } from 'react';
import { Typography, Space } from 'antd';
// import { MoreOutlined, ProfileOutlined } from '@ant-design/icons';
import styles from './index.less';
// @ts-ignore
import logo from '../../assets/imgs/logo.png';
// import PlanModal from '../../components/PlanModal';
// import { ExportOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface IProps {
  ref: Ref<HTMLDivElement>;
}

const AppHeader: React.FC<IProps> = React.forwardRef(
  ({}, ref: Ref<HTMLDivElement>) => {
    // const [visible, setVisible] = useState(false);

    // const menu = (
    //   <Menu>
    //     <Menu.Item key="list" onClick={() => setVisible(true)}>
    //       <ProfileOutlined />
    //       方案管理
    //     </Menu.Item>
    //   </Menu>
    // );

    return (
      <>
        <div className={styles.appHeader} ref={ref}>
          <Space align="center">
            <img src={logo} alt="" />
            <Title level={5}>地光数据可视化平台</Title>
          </Space>
          {/*<Space align="end">*/}
          {/*  <Dropdown*/}
          {/*    overlay={menu}*/}
          {/*    overlayClassName={styles.appHeaderDropdown}*/}
          {/*  >*/}
          {/*    <MoreOutlined className={styles.moreIcon} />*/}
          {/*  </Dropdown>*/}
          {/*</Space>*/}
        </div>

        {/*<PlanModal visible={visible} setVisible={setVisible} />*/}
      </>
    );
  },
);

export default AppHeader;
