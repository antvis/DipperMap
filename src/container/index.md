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
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*FpG2RZEbeUwAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/0a544b66-a04b-4b98-9b69-d71258f5f577.json',
        datasetId: 'line-demo-1',
        name: '线图层',
      },
    ],
    layerList: [
      {
        id: 'line-demo-1',
        name: '图层1',
        order: 1,
        datasetId: 'line-demo-1',
        createTime: 1636781178989,
        config: {
          startLngField: 'from_lon',
          startLatField: 'from_lat',
          endLngField: 'to_lon',
          endLatField: 'to_lat',
          lineType: 'arcmini',
          lineWidth: { value: 1, rangeValue: [1, 10], field: null },
          color: { value: ['#1890ff', '#ff99c3'] },
          blendType: 'additive',
        },
        type: 'line',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*vyb5QLdu9AgAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/1ee29c43-eefe-4bbe-8ed6-87f64312c461.json',
        datasetId: 'line-demo-2',
        name: '3d线图层',
      },
    ],
    layerList: [
      {
        id: 'layer-dd58a9d3-995c-460f-9059-a2c71118cfb8',
        name: '图层1',
        order: 1,
        datasetId: 'line-demo-2',
        createTime: 1636784447016,
        config: {
          startLngField: 'from_lon',
          startLatField: 'from_lat',
          endLngField: 'to_lon',
          endLatField: 'to_lat',
          lineType: 'arc3d',
          lineWidth: { value: 1, rangeValue: [1, 10], field: null },
          color: { value: ['#c96a9c', '#7e351f'] },
          blendType: 'additive',
        },
        type: 'line',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*vyb5QLdu9AgAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/5c4fdc5c-5cf7-46da-a361-f377938553dc.json',
        datasetId: 'heat-demo-1',
        name: '热力图',
      },
    ],
    layerList: [
      {
        id: 'heat-demo-1',
        name: '图层1',
        order: 1,
        datasetId: 'heat-demo-1',
        createTime: 1636789084731,
        config: {
          fillColor: {
            value: [
              'rgb(247, 252, 240)',
              'rgb(224, 243, 219)',
              'rgb(204, 235, 197)',
              'rgb(168, 221, 181)',
              'rgb(123, 204, 196)',
              'rgb(78, 179, 211)',
              'rgb(43, 140, 190)',
              'rgb(8, 104, 172)',
              'rgb(8, 64, 129)',
            ],
            field: null,
          },
          magField: 'mag',
          ranges: [30, 6720],
          blendType: 'normal',
          lngField: 'lon',
          latField: 'lat',
        },
        type: 'heat',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*WXx-RKyyr3MAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/b417528c-5d29-40f1-86cb-fd2879e56681.json',
        datasetId: 'heat-demo-1',
        name: '3D柱状图',
      },
    ],
    layerList: [
      {
        id: 'heat-demo-1',
        name: '图层1',
        order: 1,
        datasetId: 'heat-demo-1',
        createTime: 1636794784830,
        config: {
          lngField: 'lon',
          latField: 'lat',
          fillColor: { value: '#1890ff', enable: true },
          borderColor: { value: '#1890ff' },
          radius: { value: 3, rangeValue: [1, 10], field: null },
          blendType: 'additive',
          shape: 'cylinder',
          magField: 'mag',
          size: '100',
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
