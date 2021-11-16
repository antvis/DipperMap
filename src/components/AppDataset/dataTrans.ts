import papaparse from 'papaparse';
import { Feature, FeatureCollection } from '@turf/turf';
import { groupBy } from 'lodash';
import {
  IDatasetField,
  IDatasetGeoJson,
  IDatasetGeoJsonMap,
  ILayerType,
} from '../../typings';
import { GEO_TO_LAYER_TYPE_MAP } from '../../constants';

export const checkGeoJson = (data: any) => {
  return (
    data instanceof Object &&
    data.type === 'FeatureCollection' &&
    Array.isArray(data.features)
  );
};

export const transformGeoJson: (
  data: FeatureCollection,
) => IDatasetGeoJson & { data: any[] } = (data) => {
  // @ts-ignore
  const geoJsonMap: IDatasetGeoJsonMap = groupBy(
    data.features,
    (feature: Feature) => {
      // @ts-ignore
      return GEO_TO_LAYER_TYPE_MAP[feature?.geometry?.type];
    },
  ) as IDatasetGeoJsonMap;

  const layerTypes = Object.keys(geoJsonMap) as ILayerType[];

  return {
    data: data.features.map((feature) => feature.properties),
    map: geoJsonMap,
    enable: true,
    layerTypes,
  };
};

export function dataTransform(eventData: { data: any }) {
  const originData = eventData.data;
  // 监测各个字段的类型
  const fields: IDatasetField[] = [];
  let data = [];
  let isCSV = false;
  const geoJson: IDatasetGeoJson = {
    enable: false,
    map: {},
    layerTypes: [],
  };

  // 转json/csv/geoJson字符串的数据 => json数组格式
  if (Array.isArray(originData)) {
    data = originData;
  } else if (checkGeoJson(originData)) {
    const { data: geoData, ...newGeoJson } = transformGeoJson(originData);
    data = geoData;
    Object.assign(geoJson, newGeoJson);
  } else {
    try {
      if (
        originData.trim().startsWith('[') &&
        originData.trim().endsWith(']')
      ) {
        data = JSON.parse(originData);
      } else {
        data =
          papaparse.parse(originData, { header: true, skipEmptyLines: true })
            .data ?? [];
        isCSV = true;
      }
    } catch (e) {
      console.log(e);
      // message.error('数据解析有误');
    }
  }

  if (data.length) {
    const firstRow = data[0];
    Object.keys(firstRow).forEach((name) => {
      const value = firstRow[name];
      if (
        typeof value === 'number' ||
        (isCSV &&
          /^(-?\d+)(\.\d+)?$/.test(String(value)) &&
          !Number.isNaN(+value))
      ) {
        fields.push({
          type: 'number',
          name,
          values: [],
          uniqueValues: [],
          range: [0, 0],
        });
      } else if (
        typeof value === 'boolean' ||
        (isCSV && /^(true|false)$/.test(value))
      ) {
        fields.push({
          type: 'boolean',
          name,
        });
      } else if (typeof value === 'string') {
        fields.push({
          type: 'string',
          name,
          values: [],
          uniqueValues: [],
        });
      }
    });
  }

  // 转换数据字段类型 + 收集总value
  data.forEach((item: { [x: string]: any }) => {
    fields.forEach((field) => {
      if (field.type === 'number') {
        if (isCSV) {
          item[field.name] = +item[field.name] || 0;
        }
        field.values.push(item[field.name]);
      } else if (field.type === 'boolean') {
        if (isCSV) {
          item[field.name] = Boolean(item[field.name]) || false;
        }
      } else {
        field.values.push(item[field.name]);
      }
    });
  });

  fields.forEach((field) => {
    if (field.type === 'number') {
      field.uniqueValues = Array.from(new Set(field.values as number[])).sort(
        (a: number, b: number) => a - b,
      );
      field.range = [
        +field.uniqueValues[0],
        +field.uniqueValues[field.uniqueValues.length - 1],
      ];
    }
    if (field.type === 'string') {
      field.uniqueValues = Array.from(new Set(field.values));
    }
  });

  return {
    fields,
    data,
    geoJson,
  };
}
