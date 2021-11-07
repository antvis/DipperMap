import React from 'react';
import MapContainer from './container';
import ContextProvider from './context';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export function Container() {
  return (
    <ConfigProvider locale={zhCN}>
      <ContextProvider>
        <MapContainer />
      </ContextProvider>
    </ConfigProvider>
  );
}
