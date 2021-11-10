import type { IFilter } from '../../typings';
interface IProps extends Pick<IFilter, 'field' | 'value'> {
    onChange: (newValue: any) => void;
}
declare const FilterValue: (props: IProps) => JSX.Element | null;
export default FilterValue;
