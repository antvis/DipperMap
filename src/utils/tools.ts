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

export const getFilterRange: (range: [number, number]) => [number, number] = (
  range,
) => {
  return [Math.floor(range[0]), Math.ceil(range[1])];
};

export const downloadFile = (
  src: string,
  iframe = true,
  fileName = 'data.json',
) => {
  if (iframe) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.style.display = 'none';
    document.body.append(iframe);
  } else {
    const aTag = document.createElement('a');
    aTag.download = fileName;
    aTag.target = '_blank';
    aTag.href = src;
    aTag.click();
  }
};
