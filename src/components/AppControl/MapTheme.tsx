import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Radio } from 'antd';
import { MAPBOX_THEME_LIST, MAP_THEME_LIST } from '../../constants';
import { MapModelContext } from '../../context/MapContext';

function MapTheme() {
  const { mapTheme, setMapTheme, mapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      icon={<i className="dpiconfont dpicon-ditu" />}
      dropdown={
        <Menu>
          {(mapType === 'amap' ? MAP_THEME_LIST : MAPBOX_THEME_LIST).map(
            (item) => (
              <Menu.Item
                key={item.value}
                onClick={({ key }) => {
                  setMapTheme(key);
                }}
              >
                <Radio checked={mapTheme === item.value}>{item.label}</Radio>
              </Menu.Item>
            ),
          )}
        </Menu>
      }
    />
  );
}

export default MapTheme;
