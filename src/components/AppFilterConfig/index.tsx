import React, { useContext, useMemo } from 'react';
import { Empty } from 'antd';
import useFilter from '../../hooks/filter';
import FilterItem from './FilterItem';
import DragList from '../DragList';
import useListHook from '../../hooks/list';
import type { IDataset } from '../../typings';
import { DatasetModelContext } from '../../context/DatasetContext';
import { filterByDatasetId } from '../../utils';
import AddBtn from '../AppEdit/AddBtn';
import classnames from 'classnames';
import styles from './index.less';
import { FilterModelContext } from '../../context/FilterContext';

const AppFilterConfig = () => {
  const { filterList, setFilterList } = useContext(FilterModelContext);
  const { selectDataset } = useContext(DatasetModelContext);
  const { addFilter, copyFilter } = useFilter();
  const { onEditName, onDragEnd, onDelete, onChange } = useListHook(
    filterList,
    setFilterList,
  );

  const displayFilterList = useMemo(() => {
    return filterByDatasetId(filterList, selectDataset?.id);
  }, [filterList, selectDataset]);

  return (
    <div className="editPanel">
      <div className="editPanelContent">
        {!displayFilterList.length ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="暂无筛选器"
          />
        ) : (
          <DragList
            itemClassName={classnames([styles.filterItem, 'editItem'])}
            items={displayFilterList}
            onDrag={onDragEnd}
          >
            {(filter, icon) => (
              <FilterItem
                filter={filter}
                dragIcon={icon}
                onEditName={onEditName}
                onChange={onChange}
                onDelete={onDelete}
                onCopy={copyFilter}
              />
            )}
          </DragList>
        )}
      </div>
      <div className="editPanelFooter">
        <AddBtn
          text="添加筛选器"
          onClick={() => addFilter(selectDataset as IDataset)}
        />
      </div>
    </div>
  );
};

export default AppFilterConfig;
