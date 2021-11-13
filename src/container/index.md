---
toc: false
sidemenu: false
---

```tsx
/**
 * compact: true
 * inline: true
 */
import React from 'react';
// import 'antd/dist/antd.dark.less';
import DipperMap from '@antv/dipper-map';

const DEMOS = [
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*rePPSLfuXmsAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/ba077ba7-2a28-435f-b163-4def4a3c874d.json',
        datasetId: 'Chengdu',
        name: '成都',
      },
      {
        src: 'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json',
        datasetId: 'Shanghai',
        name: '上海',
      },
    ],
    layerList: [
      {
        id: 'layer-Chengdu',
        name: '成都',
        order: 1,
        datasetId: 'Chengdu',
        config: {
          lngField: 'f_lon',
          latField: 'f_lat',
          fillColor: {
            value: '#1890ff',
            enable: true,
          },
          borderColor: {
            value: '#1890ff',
          },
          radius: {
            value: 3,
            rangeValue: [1, 10],
            field: null,
          },
          blendType: 'additive',
        },
        type: 'point',
        visible: true,
        zIndex: 1,
      },
      {
        id: 'layer-Shanghai',
        name: '上海',
        order: 2,
        datasetId: 'Shanghai',
        config: {
          lngField: 'longitude',
          latField: 'latitude',
          fillColor: {
            value: '#10e817',
            enable: true,
          },
          borderColor: {
            value: '#10e817',
          },
          radius: {
            value: 3,
            rangeValue: [1, 10],
            field: null,
          },
          blendType: 'additive',
        },
        type: 'point',
        visible: true,
        zIndex: 1,
      },
    ],
  },
];

export default () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      // position: 'absolute',
      // top: 0,
      // left: 0,
    }}
  >
    <DipperMap demos={DEMOS} />
  </div>
);
```
