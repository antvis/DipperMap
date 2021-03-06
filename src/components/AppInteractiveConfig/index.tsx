import React, { useContext, useMemo } from 'react';
import { IDataset } from '../../typings';
import AddBtn from '../AppEdit/AddBtn';
import { DatasetModelContext } from '../../context/DatasetContext';
import { filterByDatasetId } from '../../utils';
import useInteractive from '../../hooks/useInteractive';
import { Empty } from 'antd';
import DragList from '../DragList';
import useList from '../../hooks/useList';
import InteractiveItem from './InteractiveItem';
import { InteractiveModelContext } from '../../context/InteractiveContext';

const AppInteractiveConfig = () => {
  const { interactiveList, setInteractiveList } = useContext(
    InteractiveModelContext,
  );

  const { selectDataset } = useContext(DatasetModelContext);

  const { onEditName, onDragEnd, onDelete, onChange } = useList(
    interactiveList,
    setInteractiveList,
  );

  const displayInteractiveList = useMemo(
    () => filterByDatasetId(interactiveList, selectDataset?.id),
    [interactiveList, selectDataset?.id],
  );

  const { addInteractive } = useInteractive();

  return (
    <div className="editPanel">
      <div className="editPanelContent">
        {!displayInteractiveList.length ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无交互" />
        ) : (
          <DragList
            itemClassName="editItem"
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
