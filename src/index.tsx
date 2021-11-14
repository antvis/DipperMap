import React, { useState } from 'react';
import MapContainer from './container';
import ContextProvider from './context';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { IGlobalProps } from './typings';
import PropContextProvider from './context/PropContext';
import { useMount } from 'ahooks';
import styles from './container/index.less';

const DipperMap: React.FC<IGlobalProps> = (props) => {
  const [containerDOM, setContainerDOM] = useState<Element | null>(null);

  useMount(() => {
    setContainerDOM(document.querySelector(`.${styles.container}`) || null);
  });

  return (
    <ConfigProvider
      locale={zhCN}
      // @ts-ignore
      getPopupContainer={() => containerDOM || document.body}
    >
      <PropContextProvider value={props}>
        <ContextProvider>
          <MapContainer />
        </ContextProvider>
      </PropContextProvider>
    </ConfigProvider>
  );
};

export default DipperMap;
