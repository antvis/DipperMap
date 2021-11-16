---
nav: false
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
    demoName: '点图层示例',
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
        name: '弧线图层',
      },
    ],
    demoName: '弧线图层示例',
    layerList: [
      {
        id: 'line-demo-1',
        name: '弧线图层1',
        order: 1,
        datasetId: 'line-demo-1',
        createTime: 1636781178989,
        config: {
          startLngField: 'from_lon',
          startLatField: 'from_lat',
          endLngField: 'to_lon',
          endLatField: 'to_lat',
          lineType: 'arc',
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
        name: '3D线图层',
      },
    ],
    demoName: '3D线图层示例',
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
        name: '3D热力图',
      },
    ],
    demoName: '3D热力图示例',
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
    demoName: '3D柱图示例',
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
  {
    demoName: '气泡图层示例',
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*cOyXRZJO2QsAAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/b48d0e58-7d43-40fa-94e0-370cb3935155.json',
        datasetId: 'dataset-6a46571d-fa09-459a-804e-9d75b452142c',
        name: '气泡图',
      },
    ],
    layerList: [
      {
        id: 'layer-7647b08a-8e58-4644-8d54-761c4930ec79',
        name: '图层1',
        order: 1,
        datasetId: 'dataset-6a46571d-fa09-459a-804e-9d75b452142c',
        createTime: 1636783407525,
        config: {
          lngField: 'lat',
          latField: 'lot',
          fillColor: {
            value: [
              'rgb(247, 252, 253)',
              'rgb(229, 245, 249)',
              'rgb(204, 236, 230)',
              'rgb(153, 216, 201)',
              'rgb(102, 194, 164)',
              'rgb(65, 174, 118)',
              'rgb(35, 139, 69)',
              'rgb(0, 109, 44)',
              'rgb(0, 68, 27)',
            ],
            enable: true,
            field: 'capacity',
          },
          borderColor: {
            value: '#1890ff',
          },
          radius: {
            value: 3,
            rangeValue: [1, 8],
            field: 'capacity',
          },
          blendType: 'normal',
          opacity: 52,
        },
        type: 'point',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    demoName: '面图层示例',
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*uHVCQKuIT08AAAAAAAAAAAAAARQnAQ',
    dataSrc: [
      {
        name: '中国地图省级',
        datasetId: 'dataset-bbbb4152-aca5-4ed0-a0f8-151f690ef201',
        src: 'https://gw.alipayobjects.com/os/bmw-prod/bae79d2b-38d4-464d-b76c-ffc0dc9808d8.json',
      },
    ],
    layerList: [
      {
        id: 'layer-d163f8c9-11d1-4247-9cac-03b748a04e33',
        name: '图层1',
        order: 1,
        datasetId: 'dataset-bbbb4152-aca5-4ed0-a0f8-151f690ef201',
        createTime: 1636883086854,
        config: {
          geoField: 'polygon',
          fillColor: {
            value: [
              'rgb(247, 251, 255)',
              'rgb(222, 235, 247)',
              'rgb(198, 219, 239)',
              'rgb(158, 202, 225)',
              'rgb(107, 174, 214)',
              'rgb(66, 146, 198)',
              'rgb(33, 113, 181)',
              'rgb(8, 81, 156)',
              'rgb(8, 48, 107)',
            ],
            field: 'adcode',
          },
          borderColor: {
            value: '#1890ff',
            field: null,
          },
          borderWidth: {
            value: 1,
            rangeValue: [1, 10],
            field: null,
          },
          blendType: 'normal',
          dimension: {
            rangeValue: [1, 100],
            field: null,
          },
        },
        type: 'polygon',
        visible: true,
        zIndex: 1,
      },
    ],
  },
];

export default () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 102,
      // position: 'absolute',
      // top: 0,
      // left: 0,
    }}
  >
    <DipperMap demos={DEMOS} />
  </div>
);
```
