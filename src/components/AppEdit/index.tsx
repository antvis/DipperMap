import React from 'react';
import { Tabs } from 'antd';
import styles from './index.less';
import AppLayerConfig from '../AppLayerConfig';
import AppFilterConfig from '../AppFilterConfig';
import AppInteractiveConfig from '../AppInteractiveConfig';

const { TabPane } = Tabs;

const AppEdit = () => {
  return (
    <Tabs className={styles.appEdit} size="small">
      <TabPane
        tab={
          <div>
            <i className="dpiconfont dpicon-tuceng" />
            <span>图层</span>
          </div>
        }
        key="图层"
      >
        <AppLayerConfig />
      </TabPane>
      <TabPane
        tab={
          <div>
            <i className="dpiconfont dpicon-guolvqi" />
            <span>过滤器</span>
          </div>
        }
        key="过滤器"
      >
        <AppFilterConfig />
      </TabPane>
      <TabPane
        tab={
          <div>
            <i className="dpiconfont dpicon-jiaohu" />
            <span>交互</span>
          </div>
        }
        key="交互"
      >
        <AppInteractiveConfig />
      </TabPane>
    </Tabs>
  );
};

export default AppEdit;
