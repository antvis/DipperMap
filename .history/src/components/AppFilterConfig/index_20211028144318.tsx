import React, { useContext, useMemo } from 'react';
import { Empty, Button } from 'antd';
import styles from './index.less';
import useFilter from '../../hooks/filter';
import FilterItem from './FilterItem';
import DragList from '../DragList';
import useListHook from '../../hooks/list';
import type { IDataset } from '../../typings';
import { ConfigModelContext } from '@/context/ConfigContext';

const AppFilterConfig = () => {
  const { filterList, setFilterList, filterByDatasetId } =
    useContext(ConfigModelContext);
  const { selectDataset } = useModel('dataset');
  const { addFilter, copyFilter } = useFilter();
  const { onEditName, onDragEnd, onDelete, onChange } = useListHook(
    filterList,
    setFilterList,
  );

  const displayFilterList = useMemo(() => {
    return filterByDatasetId(filterList, selectDataset?.id);
  }, [filterByDatasetId, filterList, selectDataset]);

  return (
    <div className={styles.filterList}>
      <div className={styles.filterListContent}>
        {!displayFilterList.length ? (
          <Empty description="暂无筛选器" />
        ) : (
          <DragList
            itemClassName={styles.filterItem}
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
      <div className={styles.filterListFooter}>
        <Button
          icon={<i className="dpiconfont dpicon-tianjia" />}
          className={styles.addFilterBtn}
          disabled={!selectDataset}
          type="ghost"
          onClick={() => addFilter(selectDataset as IDataset)}
        >
          添加筛选器
        </Button>
      </div>
    </div>
  );
};

export default AppFilterConfig;
