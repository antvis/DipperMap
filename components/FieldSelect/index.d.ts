import type { IDatasetField } from '../../typings';
import type { SelectProps } from 'antd';
interface IProps extends SelectProps<string | undefined> {
    value?: string | null;
    fields?: IDatasetField[];
    onChange?: (value?: string | null, field?: IDatasetField | null) => void;
}
declare const FieldSelect: ({ value, fields, onChange, ...props }: IProps) => JSX.Element;
export default FieldSelect;
