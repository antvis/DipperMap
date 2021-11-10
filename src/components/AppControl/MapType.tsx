import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Radio, Tooltip } from 'antd';
import { MAP_TYPES } from '../../constants';
import { MapModelContext } from '../../context/MapContext';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

function MapType() {
  const { mapType, setMapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      text="底图类型"
      icon={<i className="dpiconfont dpicon-ditu" />}
      dropdown={
        <Menu className={styles.mapType}>
          {MAP_TYPES.map((item) => (
            <Menu.Item
              key={item.value}
              onClick={({ key }) => {
                setMapType(key);
              }}
            >
              <Radio checked={mapType === item.value}>
                <span>{item.label}</span>
                <Tooltip overlay={item.tooltip} placement="right">
                  <QuestionCircleOutlined className={styles.tooltipIcon} />
                </Tooltip>
              </Radio>
            </Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapType;
