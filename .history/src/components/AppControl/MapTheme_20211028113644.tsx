import React from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Radio } from 'antd';
import { MAP_THEME_LIST } from '../../constants';
import { useModel } from '@alipay/bigfish';

function MapTheme() {
  const { mapTheme, setMapTheme } = useModel('map');

  return (
    <AppControlItem
      text="地图主题"
      icon={<i className="dpiconfont dpicon-ditu" />}
      dropdown={
        <Menu>
          {MAP_THEME_LIST.map((item) => (
            <Menu.Item
              key={item.value}
              onClick={({ key }) => {
                setMapTheme(key);
              }}
            >
              <Radio checked={mapTheme === item.value}>{item.label}</Radio>
            </Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapTheme;
