import React, { useContext } from 'react';
import { AMapScene } from '@antv/l7-react';
import { MapModelContext } from '../../context/MapContext';

const AppMap: React.FC<{ className?: string }> = ({ children, className }) => {
  const { mapTheme } = useContext(MapModelContext);

  return (
    <AMapScene
      className={className}
      map={{
        center: [120.153576, 30.287459],
        pitch: 0,
        zoom: 10,
        style: `amap://styles/${mapTheme}`,
      }}
      option={{
        logoPosition: 'bottomright',
      }}
    >
      {children}
    </AMapScene>
  );
};

export default AppMap;
