import type { IFilter } from '../../typings';
interface IProps {
    filter: IFilter;
    dragIcon: JSX.Element;
    onChange: (newFilter: Partial<IFilter>) => void;
    onEditName: (newName: string, filter: IFilter) => void;
    onCopy: (filter: IFilter) => void;
    onDelete: (filter: IFilter) => void;
}
declare const FilterItem: ({ filter, onChange, onEditName, onDelete, onCopy, dragIcon }: IProps) => JSX.Element;
export default FilterItem;
