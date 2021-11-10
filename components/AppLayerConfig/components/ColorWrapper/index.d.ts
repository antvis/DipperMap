import type { FormInstance } from 'antd';
import type { IDatasetField } from '../../../../typings';
interface IProps {
    label: string;
    field: string;
    range?: boolean;
    form: FormInstance;
    displayFieldCheckbox?: boolean;
    fields: IDatasetField[];
}
declare const ColorWrapper: ({ label, form, field, fields, range, displayFieldCheckbox, }: IProps) => JSX.Element;
export default ColorWrapper;
