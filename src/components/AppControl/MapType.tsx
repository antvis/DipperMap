import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Radio, Tooltip } from 'antd';
import { MAP_TYPES } from '../../constants';
import { IMapType } from '../../typings';
import { MapModelContext } from '../../context/MapContext';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import classnames from 'classnames';

function MapType() {
  const { mapType, setMapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      icon={<i className="dpiconfont dpicon-ditu" />}
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
                <QuestionCircleOutlined className={styles.tooltipIcon} />
              </Tooltip>
            </Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapType;
