import React, { useCallback } from 'react';
import styles from './index.less';
import classnames from 'classnames';
import type { DropResult } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface IProps<P> {
  itemStyle?: React.CSSProperties | ((dataset: P) => React.CSSProperties);
  itemClassName?: string | ((item: P) => string);
  items: P[];
  onItemClick?: (item: P) => void;
  onDrag: (newItems: any[]) => void;
  children: (item: P, icon: JSX.Element) => JSX.Element;
  keyField?: string;
}

function DragList<P extends Record<string, any>>({
  children,
  itemStyle,
  itemClassName,
  items,
  onDrag,
  onItemClick,
  keyField = 'id',
}: IProps<P>) {
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (result.destination) {
        const newItems = [...items];
        const sourceIndex = result.source.index;
        const targetIndex = result.destination.index;
        const [item] = newItems.splice(sourceIndex, 1);
        newItems.splice(targetIndex, 0, item);
        onDrag(newItems);
      }
    },
    [items, onDrag],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="dropable" direction="vertical">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable
                key={item[keyField]}
                draggableId={String(item[keyField])}
                index={index}
              >
                {(itemProvided, snapshot) => {
                  const className =
                    typeof itemClassName === 'function'
                      ? itemClassName(items[index])
                      : itemClassName;
                  return (
                    <div
                      {...itemProvided.draggableProps}
                      ref={itemProvided.innerRef}
                      className={classnames([
                        styles.dragItem,
                        className,
                        snapshot.isDragging ? 'is-drag' : null,
                      ])}
                      style={{
                        ...(itemStyle instanceof Function
                          ? itemStyle?.(item)
                          : {}),
                        ...(itemProvided.draggableProps.style ?? {}),
                      }}
                      key={item[keyField]}
                      onClick={() => onItemClick?.(items[index])}
                    >
                      {children(
                        item,
                        <i
                          className={classnames([
                            'dpiconfont',
                            'dpicon-yidong',
                            styles.dragIcon,
                          ])}
                          {...itemProvided.dragHandleProps}
                        />,
                      )}
                    </div>
                  );
                }}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragList;
