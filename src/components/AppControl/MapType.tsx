import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Tooltip } from 'antd';
import { MAP_TYPES } from '../../constants';
import { IMapType } from '../../typings';
import { MapModelContext } from '../../context/MapContext';
import styles from './index.less';
import classnames from 'classnames';

function MapType() {
  const { mapType, setMapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      title="地图类型"
      icon={<i className="dpiconfont dpicon-dituditu-lan" />}
      dropdown={
        <Menu className={styles.mapType}>
          {MAP_TYPES.map((item) => (
            <Menu.Item
              key={item.value}
              className={classnames({
                [styles.menuItemActive]: item.value === mapType,
              })}
              onClick={({ key }) => {
                setMapType(key as IMapType);
              }}
            >
              <span>{item.label}</span>
              <Tooltip overlay={item.tooltip} placement="right">
                <i
                  className={classnames([
                    styles.tooltipIcon,
                    'dpiconfont',
                    'dpicon-31yiwen',
                  ])}
                />
              </Tooltip>
            </Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapType;
