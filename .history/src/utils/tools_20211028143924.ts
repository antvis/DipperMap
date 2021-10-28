import { v4 } from 'uuid';
import { IEntity } from '@/typings';

export const getRandomId = (prefix = '') => {
  if (prefix) {
    return `${prefix}-${v4()}`;
  }
  return v4();
};

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

export const filterByDatasetId = <P extends IEntity>(
  list: P[],
  datasetId?: string | null,
) => {
  if (!datasetId) {
    return list;
  }
  return list.filter((item) => item.datasetId === datasetId);
};
