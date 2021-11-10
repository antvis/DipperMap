import React from 'react';
import MapContainer from './container';
import ContextProvider from './context';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { IGlobalProps } from './typings';
import PropContextProvider from './context/PropContext';

const DipperMap: React.FC<IGlobalProps> = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <PropContextProvider value={props}>
        <ContextProvider>
          <MapContainer />
        </ContextProvider>
      </PropContextProvider>
    </ConfigProvider>
  );
};

export default DipperMap;
