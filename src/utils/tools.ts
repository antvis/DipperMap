import { v4 } from 'uuid';
import { IDatasetField, IEntity } from '../typings';
import papaparse from 'papaparse';
import { message } from 'antd';

/**
 * 获取随机的id
 * @param prefix id前缀
 */
export const getRandomId = (prefix = '') => {
  if (prefix) {
    return `${prefix}-${v4()}`;
  }
  return v4();
};

/**
 * 获取元素到page左上角的像素值
 * @param element
 */
export const getRealOffsetTop = (element: Element) => {
  let currentElement: Element | null = element;
  // @ts-ignore
  let top = element.offsetTop ?? 0;
  while (currentElement !== null) {
    // @ts-ignore
    currentElement = currentElement.offsetParent;
    // @ts-ignore
    top += element.offsetTop ?? 0;
  }
  return top;
};

/**
 * 生成以length结尾的唯一名称
 * @param list
 * @param field
 * @param prefix
 */
export function generateUnRepeatValue<P, T>(
  list: P[],
  field: keyof P,
  prefix?: string,
) {
  const fieldList = list.map((item) => item[field]);
  let index = 0;
  let newValue: any = index;

  do {
    index += 1;
    newValue = prefix ? prefix + index : index;
  } while (fieldList.includes(newValue));

  return newValue as T;
}

/**
 * 根据datasetId筛选
 * @param list
 * @param datasetId
 */
export const filterByDatasetId = <P extends IEntity>(
  list: P[],
  datasetId?: string | null,
) => {
  if (!datasetId) {
    return list;
  }
  return list.filter((item) => item.datasetId === datasetId);
};

/**
 * 将JSON/CSV数据转换成 data + fields
 * @param originData
 */
export const transformData = (originData: string | any[]) => {
  let data: any[] = [];
  let isCSV = false;

  // 转json/csv字符串的数据 => json数组格式
  if (Array.isArray(originData)) {
    data = originData;
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
      message.error('数据解析有误');
    }
  }
  // 监测各个字段的类型
  const fields: IDatasetField[] = [];
  if (data.length) {
    const firstRow = data[0];
    Object.keys(firstRow).forEach((name) => {
      const value = firstRow[name];
      if (
        typeof value === 'number' ||
        (/^(-?\d+)(\.\d+)?$/.test(String(value)) && !Number.isNaN(+value))
      ) {
        fields.push({
          type: 'number',
          name,
          values: [],
          uniqueValues: [],
          range: [0, 0],
        });
      } else if (typeof value === 'boolean' || /^(true|false)$/.test(value)) {
        fields.push({
          type: 'boolean',
          name,
        });
      } else {
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
  data.forEach((item) => {
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
      field.uniqueValues = Array.from(new Set(field.values));
      field.range = [
        Math.min(...field.uniqueValues),
        Math.max(...field.uniqueValues),
      ];
    }
    if (field.type === 'string') {
      field.uniqueValues = Array.from(new Set(field.values));
    }
  });

  return {
    fields,
    data,
  };
};
