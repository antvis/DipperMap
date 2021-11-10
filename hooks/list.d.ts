import type { IEntity } from '../typings';
declare const useListHook: <P extends IEntity>(list: P[], setList: (newList: P[]) => void) => {
    onEditName: (newName: string, { id, name: oldName }: P) => void;
    onDragEnd: (newList: P[]) => void;
    onDelete: ({ id }: P) => void;
    onChange: (newItem: Partial<P>) => void;
};
export default useListHook;
