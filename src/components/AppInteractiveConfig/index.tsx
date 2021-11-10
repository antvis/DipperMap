import React, { useContext, useMemo } from 'react';
import styles from './index.less';
import { IDataset } from '../../typings';
import AddBtn from '../AppEdit/AddBtn';
import { DatasetModelContext } from '../../context/DatasetContext';
import { ConfigModelContext } from '../../context/ConfigContext';
import { filterByDatasetId } from '../../utils';
import useInteractive from '../../hooks/interactive';
import { Empty } from 'antd';
import DragList from '../DragList';
import useListHook from '../../hooks/list';
import InteractiveItem from './InteractiveItem';

const AppInteractiveConfig = () => {
  const { interactiveList, setInteractiveList } =
    useContext(ConfigModelContext);

  const { selectDataset } = useContext(DatasetModelContext);

  const { onEditName, onDragEnd, onDelete, onChange } = useListHook(
    interactiveList,
    setInteractiveList,
  );

  const displayInteractiveList = useMemo(
    () => filterByDatasetId(interactiveList, selectDataset?.id),
    [interactiveList, selectDataset?.id],
  );

  const { addInteractive } = useInteractive();

  return (
    <div className={styles.interactiveConfig}>
      <div className="editPanelContent">
        {!displayInteractiveList.length ? (
          <Empty description="暂无交互" />
        ) : (
          <DragList
            itemClassName={styles.interactiveItem}
            items={displayInteractiveList}
            onDrag={onDragEnd}
          >
            {(interactive, icon) => (
              <InteractiveItem
                interactive={interactive}
                dragIcon={icon}
                onChange={onChange}
                onDelete={onDelete}
                onEditName={onEditName}
              />
            )}
          </DragList>
        )}
      </div>
      <div className="editPanelFooter">
        <AddBtn
          text="添加交互"
          disabled={!selectDataset || displayInteractiveList.length >= 1}
          onClick={() => addInteractive(selectDataset as IDataset)}
        />
      </div>
    </div>
  );
};

export default AppInteractiveConfig;
