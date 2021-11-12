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
import DipperMap from '@antv/dipper-map';

const DEMOS = [
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*rePPSLfuXmsAAAAAAAAAAAAAARQnAQ',
    dataSrc:
      'https://gw.alipayobjects.com/os/bmw-prod/ba077ba7-2a28-435f-b163-4def4a3c874d.json',
    demoName: '基础点图层',
    datasetId: 'dataset-460dc585-a4fe-47db-95c7-fc5fb53c43ed',
    layerList: [
      {
        id: 'layer-c620ac3c-3720-46df-80bf-4c6a4c64ad40',
        name: '图层1',
        order: 1,
        datasetId: 'dataset-460dc585-a4fe-47db-95c7-fc5fb53c43ed',
        createTime: 1636601233481,
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
