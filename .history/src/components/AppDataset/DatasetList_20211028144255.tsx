import React, { useContext, useState } from 'react';
import styles from './index.less';
import { Empty, message, Popconfirm, Tooltip, Modal } from 'antd';
import DragList from '../DragList';
import type { IDataset } from '../../typings';
import DataDetailDrawer from './DataDetailDrawer';
import useDataset from '../../hooks/dataset';
import classnames from 'classnames';
import useListHook from '../../hooks/list';
import EditName from '../EditName';
import { ConfigModelContext } from '@/context/ConfigContext';
import { DatasetModelContext } from '@/context/DatasetContext';

interface IProps {
  className?: string;
}

export default function DatasetList({ className }: IProps) {
  const { datasetList, setDatasetList, selectDatasetId, setSelectDatasetId } =
    useContext(DatasetModelContext);
  const {
    layerList,
    filterList,
    interactiveList,
    setLayerList,
    setFilterList,
    setInteractiveList,
  } = useContext(ConfigModelContext);

  const { onDragEnd, onEditName, onDelete } = useListHook(
    datasetList,
    setDatasetList,
  );

  const [datasetDetail, setDatasetDetail] = useState({
    visible: false,
    datasetId: '',
  });

  const { copyDataset } = useDataset();

  const onClick = (dataset: IDataset) => {
    setSelectDatasetId(selectDatasetId === dataset.id ? null : dataset.id);
  };

  const onCopy = (dataset: IDataset) => {
    copyDataset(dataset);
    message.success('复制成功');
  };

  const onFullDelete = (dataset: IDataset) => {
    const { id } = dataset;
    onDelete(dataset);

    setLayerList(layerList.filter((item) => item.datasetId !== id));
    setFilterList(filterList.filter((item) => item.datasetId !== id));
    setInteractiveList(interactiveList.filter((item) => item.datasetId !== id));
  };

  const checkDelete = (dataset: IDataset) => {
    const { id: datasetId } = dataset;
    if (
      [...layerList, ...filterList, ...interactiveList].filter(
        (item) => item.datasetId === datasetId,
      ).length
    ) {
      Modal.confirm({
        content: '当前有配置关联至该数据源，确认是否删除',
        onOk: () => onFullDelete(dataset),
      });
    } else {
      onFullDelete(dataset);
    }
  };

  return (
    <div className={className}>
      <DragList
        itemClassName={(item) =>
          classnames({
            [styles.appDatasetItem]: true,
            'is-select': item.id === selectDatasetId,
          })
        }
        items={datasetList}
        onDrag={onDragEnd}
        onItemClick={onClick}
      >
        {(dataset, icon) => (
          <>
            {icon}
            <div className={styles.appDatasetItemContent}>
              <div className={styles.btnGroup}>
                <Tooltip overlay="复制" placement="bottom">
                  <i
                    className="dpiconfont dpicon-fuzhi is-link"
                    onClick={() => onCopy(dataset)}
                  />
                </Tooltip>
                <Popconfirm
                  title="确认删除此数据源"
                  onConfirm={() => checkDelete(dataset)}
                >
                  <Tooltip overlay="删除" placement="bottom">
                    <i className="dpiconfont dpicon-icon_shanchu is-red-link" />
                  </Tooltip>
                </Popconfirm>
              </div>
              <div className={styles.datasetInfo}>
                <EditName
                  name={dataset.name}
                  onChange={(newName) => onEditName(newName, dataset)}
                />
                <div
                  className={classnames([styles.datasetFileName, 'is-link'])}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDatasetDetail({
                      datasetId: dataset.id,
                      visible: true,
                    });
                  }}
                >
                  <span>共{dataset.data.length}行数据</span>
                  <i className="dpiconfont dpicon-right" />
                </div>
              </div>
            </div>
          </>
        )}
      </DragList>
      {!datasetList.length && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据源" />
      )}
      <DataDetailDrawer
        currentDatasetId={datasetDetail.datasetId}
        datasetList={datasetList}
        visible={datasetDetail.visible}
        onClose={() =>
          setDatasetDetail({
            ...datasetDetail,
            visible: false,
          })
        }
      />
    </div>
  );
}
