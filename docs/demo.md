---
title: 在线配置
order: 5
hide: true
group:
  path: /demo
nav:
  title: 在线配置
  path: /
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
    exportDatasetList: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/ba077ba7-2a28-435f-b163-4def4a3c874d.json',
        datasetId: 'Point',
        name: '成都',
      },
    ],
    demoName: '点图层示例',
    layerList: [
      {
        id: 'Point',
        name: '图层1',
        order: 1,
        datasetId: 'Point',
        createTime: 1637398182381,
        config: {
          lngField: 'f_lon',
          latField: 'f_lat',
          fillColor: {
            value: '#269a99',
          },
          borderColor: {
            value: '#1890ff',
          },
          radius: {
            value: 2,
            rangeValue: [1, 10],
            field: null,
          },
          blendType: 'additive',
          opacity: 100,
          shape: 'circle',
          size: 100,
          dimension: {
            rangeValue: [1, 100],
            field: null,
          },
        },
        type: 'point',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*SLbgR72KKFsAAAAAAAAAAAAAARQnAQ',
    exportDatasetList: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/0a544b66-a04b-4b98-9b69-d71258f5f577.json',
        datasetId: 'arc-line',
        name: '弧线图层',
      },
    ],
    demoName: '弧线图层示例',
    layerList: [
      {
        id: 'arc-line',
        name: '弧线图层',
        order: 1,
        datasetId: 'arc-line',
        createTime: 1637390063854,
        config: {
          startLngField: 'from_lon',
          startLatField: 'from_lat',
          endLngField: 'to_lon',
          endLatField: 'to_lat',
          lineType: 'arc',
          lineWidth: {
            value: 1,
            rangeValue: [1, 10],
            field: null,
          },
          color: {
            value: ['#1890ff', '#FF5627'],
          },
          blendType: 'additive',
          opacity: 100,
        },
        type: 'line',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*pZBySbhAUp4AAAAAAAAAAAAAARQnAQ',
    exportDatasetList: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/1ee29c43-eefe-4bbe-8ed6-87f64312c461.json',
        datasetId: 'line-demo-2',
        name: '3D线图层',
      },
    ],
    demoName: '3D线图层示例',
    layerList: [
      {
        id: 'line-demo-2',
        name: '3D线图层',
        order: 1,
        datasetId: 'line-demo-2',
        createTime: 1637390235303,
        config: {
          startLngField: 'from_lon',
          startLatField: 'from_lat',
          endLngField: 'to_lon',
          endLatField: 'to_lat',
          lineType: 'arc3d',
          lineWidth: {
            value: 1,
            rangeValue: [1, 10],
            field: null,
          },
          color: {
            value: ['#1890ff', '#FF5627'],
          },
          blendType: 'additive',
          opacity: 100,
        },
        type: 'line',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*8lyORIRMDNYAAAAAAAAAAAAAARQnAQ',
    exportDatasetList: [
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
        name: '3D热力图',
        order: 1,
        datasetId: 'heat-demo-1',
        createTime: 1637398560757,
        config: {
          shape: 'heatmap3D',
          lngField: 'lon',
          latField: 'lat',
          magField: 'mag',
          fillColor: {
            colorType: 'sequential',
            colorIndex: 4,
            colorReverse: false,
          },
          radius: 4,
          ranges: [0, 1],
          blendType: 'normal',
          opacity: 100,
          intensity: 4,
          dimension: {
            rangeValue: [1, 100],
            field: null,
          },
        },
        type: 'heat',
        visible: true,
        zIndex: 1,
      },
    ],
  },
  {
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*-TojSYrHg5QAAAAAAAAAAAAAARQnAQ',
    exportDatasetList: [
      {
        src: 'https://gw.alipayobjects.com/os/bmw-prod/b417528c-5d29-40f1-86cb-fd2879e56681.json',
        datasetId: 'cylinder-demo-1',
        name: '3D柱状图',
      },
    ],
    demoName: '3D图示例',
    layerList: [
      {
        id: 'cylinder-demo-1',
        name: '图层1',
        order: 1,
        datasetId: 'cylinder-demo-1',
        createTime: 1637398905689,
        config: {
          lngField: 'lon',
          latField: 'lat',
          fillColor: {
            value: '#5b8ff9',
          },
          borderColor: {
            value: '#1890ff',
          },
          radius: {
            value: 3,
            rangeValue: [1, 10],
            field: null,
          },
          blendType: 'normal',
          opacity: 100,
          shape: 'cylinder',
          size: 3,
          dimension: {
            rangeValue: [1, 100],
            field: null,
          },
          magField: 'lon',
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
      'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*0W_dSre5Tq4AAAAAAAAAAAAAARQnAQ',
    exportDatasetList: [
      {
        name: '中国地图省级',
        datasetId: 'China',
        src: 'https://gw.alipayobjects.com/os/bmw-prod/e1f27f8c-fed9-42b9-8bd6-fa2b455533c7.json',
      },
    ],
    layerList: [
      {
        id: 'China',
        name: '图层1',
        order: 1,
        datasetId: 'China',
        createTime: 1637399254714,
        config: {
          geoField: null,
          fillColor: {
            value: '#1890ff',
            field: 'childrenNum',
            colorType: 'sequential',
            colorIndex: 0,
            colorReverse: false,
            enable: true,
          },
          borderColor: {
            value: '#1890ff',
          },
          borderWidth: {
            value: 1,
            rangeValue: [1, 10],
          },
          blendType: 'normal',
          opacity: 100,
          dimension: {
            rangeValue: [1, 100],
            field: null,
          },
          intense: 10000,
          intenseField: null,
          shape: 'fill',
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
