import type { IDatasetFieldType } from '../typings';
interface IProps {
    type: IDatasetFieldType;
}
declare const TypeTag: ({ type }: IProps) => JSX.Element;
export default TypeTag;
