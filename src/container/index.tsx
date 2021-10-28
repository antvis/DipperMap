import React, { useRef } from 'react';
import styles from './index.less';
import AppMap from '../components/AppMap';
import AppControl from '../components/AppControl';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import AppDataset from '../components/AppDataset';
import AppEdit from '../components/AppEdit';
import AppLayerList from '../components/AppLayerList';
import ContextProvider from '../context';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  return (
    <ConfigProvider locale={zhCN}>
      <ContextProvider>
        <AppMap className={styles.container}>
          <AppControl className={styles.control} />
          <AppSidebar ref={sidebarRef} className={styles.sidebar}>
            <AppHeader />
            <AppDataset />
            <AppEdit />
          </AppSidebar>
          <AppLayerList />
        </AppMap>
      </ContextProvider>
    </ConfigProvider>
  );
};
