interface IProps<P> {
    itemClassName?: string | ((item: P) => string);
    items: P[];
    onItemClick?: (item: P) => void;
    onDrag: (newItems: any[]) => void;
    children: (item: P, icon: JSX.Element) => JSX.Element;
    keyField?: string;
}
declare function DragList<P extends Record<string, any>>({ children, itemClassName, items, onDrag, onItemClick, keyField, }: IProps<P>): JSX.Element;
export default DragList;
