import React from 'react';
import type { FormInstance } from 'antd';
import type { IDatasetField } from '../../../../typings';
declare const RangeWrapper: React.FC<{
    label: string;
    field: string;
    form: FormInstance;
    fields: IDatasetField[];
}>;
export default RangeWrapper;
