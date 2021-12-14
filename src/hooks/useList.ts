import { useCallback } from 'react';
import { message } from 'antd';
import type { IEntity } from '../typings';

const useList = <P extends IEntity>(
  list: P[],
  setList: (newList: P[]) => void,
) => {
  const onChange = useCallback(
    (newItem: Partial<P>) => {
      const newList = [...list];
      const targetIndex = newList.findIndex((item) => item.id === newItem.id);
      if (targetIndex > -1) {
        newList[targetIndex] = {
          ...newList[targetIndex],
          ...newItem,
        };
      }
      setList(newList);
    },
    [list, setList],
  );

  const onEditName = useCallback(
    (newName: string, { id, name: oldName }: P) => {
      if (oldName === newName) {
        return;
      }
      const repeatNameItem = list.find(
        (item) => item.name === newName && item.id !== id,
      );
      if (repeatNameItem) {
        message.error('名称与其他项重复');
        return;
      }
      onChange({
        id,
        name: newName,
      } as Partial<P>);
    },
    [list, onChange],
  );

  const onDragEnd = useCallback(
    (newList: P[]) => {
      newList.forEach((item, index) => {
        Object.assign(item, {
          order: index + 1,
        });
      });
      setList(newList);
    },
    [setList],
  );

  const onDelete = useCallback(
    ({ id }: P) => {
      const newList = [...list];
      const targetIndex = newList.findIndex((item) => item.id === id);
      if (targetIndex > -1) {
        newList.splice(targetIndex, 1);
      }
      setList(newList);
      message.success('删除成功');
    },
    [list, setList],
  );

  return {
    onEditName,
    onDragEnd,
    onDelete,
    onChange,
  };
};

export default useList;
