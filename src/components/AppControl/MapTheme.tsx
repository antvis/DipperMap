import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu } from 'antd';
import { MAPBOX_THEME_LIST, MAP_THEME_LIST } from '../../constants';
import { MapModelContext } from '../../context/MapContext';
import styles from './index.less';
import classnames from 'classnames';

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
                className={classnames({
                  [styles.menuItemActive]: item.value === mapTheme,
                })}
                onClick={({ key }) => {
                  setMapTheme(key);
                }}
              >
                {item.label}
              </Menu.Item>
            ),
          )}
        </Menu>
      }
    />
  );
}

export default MapTheme;
