import React from 'react';
import { Tag } from 'antd';
import type { IDatasetFieldType } from '../typings';
import { DATASET_FIELD_TYPE_COLOR } from '../constants';

interface IProps {
  type: IDatasetFieldType;
}

const TypeTag = ({ type }: IProps) => {
  return <Tag color={DATASET_FIELD_TYPE_COLOR[type]}>{type}</Tag>;
};

export default TypeTag;
