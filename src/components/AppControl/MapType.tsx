import React, { useContext } from 'react';
import AppControlItem from './common/AppControlItem';
import { Menu, Radio } from 'antd';
import { MAP_TYPES } from '../../constants';
import { MapModelContext } from '../../context/MapContext';

function MapType() {
  const { mapType, setMapType } = useContext(MapModelContext);

  return (
    <AppControlItem
      text="底图类型"
      icon={<i className="dpiconfont dpicon-ditu" />}
      dropdown={
        <Menu>
          {MAP_TYPES.map((item) => (
            <Menu.Item
              key={item.value}
              onClick={({ key }) => {
                setMapType(key);
              }}
            >
              <Radio checked={mapType === item.value}>{item.label}</Radio>
            </Menu.Item>
          ))}
        </Menu>
      }
    />
  );
}

export default MapType;
