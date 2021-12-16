import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu } from 'antd';
import { MAPBOX_THEME_LIST, AMAP_THEME_LIST } from '../../constants';
import { MapModelContext } from '../../context/MapContext';
import styles from './index.less';
import classnames from 'classnames';
import { IMapTheme } from '../../typings';

function MapTheme() {
  const { mapTheme, setMapTheme, mapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      title="地图主题"
      icon={<i className="dpiconfont dpicon-dituzhuti" />}
      dropdown={
        <Menu>
          {(mapType === 'amap' ? AMAP_THEME_LIST : MAPBOX_THEME_LIST).map(
            (item) => (
              <Menu.Item
                key={item.value}
                className={classnames({
                  [styles.menuItemActive]: item.value === mapTheme,
                })}
                onClick={({ key }) => {
                  setMapTheme(key as IMapTheme);
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
