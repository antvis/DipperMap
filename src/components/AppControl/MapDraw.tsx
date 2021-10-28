import React, { useMemo } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu } from 'antd';

function MapDraw() {
  const controlList = useMemo(() => ['点', '线', '圆', '多边形', '矩形'], []);

  return (
    <AppControlItem
      text="自由绘制"
      icon={<i className="dpiconfont dpicon-ziyouhuizhi" />}
      dropdown={
        <Menu>
          {controlList.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapDraw;
