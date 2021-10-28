import React from 'react';
import { AMapScene } from '@antv/l7-react';
import { useModel } from '@alipay/bigfish';

const AppMap: React.FC<{ className?: string }> = ({ children, className }) => {
  const { mapTheme } = useModel('map');

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
