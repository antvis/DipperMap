import React, { useCallback, useContext, useMemo } from 'react';
import styles from './index.less';
import { Button, Empty } from 'antd';
import useListHook from '../../hooks/list';
import useLayer from '../../hooks/layer';
import type { IDataset, ILayer } from '../../typings';
import DragList from '../DragList';
import LayerItemConfig from './LayerItemConfig';
import { ConfigModelContext } from '../../context/ConfigContext';
import { filterByDatasetId } from '../../utils';
import { DatasetModelContext } from '../../context/DatasetContext';

const AppLayerConfig = () => {
  const { layerList, setLayerList } = useContext(ConfigModelContext);
  const { selectDataset } = useContext(DatasetModelContext);
  const { addLayer, copyLayer, getDefaultConfig } = useLayer();
  const { onDragEnd, onDelete, onChange, onEditName } = useListHook(
    layerList,
    setLayerList,
  );

  const displayLayerList = useMemo(
    () => filterByDatasetId(layerList, selectDataset?.id),
    [layerList, selectDataset],
  );

  const onLayerChange = useCallback(
    (oldLayer: ILayer, newLayer: Partial<ILayer>) => {
      if (newLayer.type && newLayer.type !== oldLayer.type) {
        onChange({
          ...oldLayer,
          ...newLayer,
          type: newLayer.type,
          config: getDefaultConfig(newLayer.type),
        });
      } else {
        onChange(newLayer);
      }
    },
    [getDefaultConfig, onChange],
  );

  return (
    <div className={styles.layerList}>
      <div className={styles.layerListContent}>
        {!displayLayerList.length ? (
          <Empty description="暂无图层" />
        ) : (
          <DragList
            itemClassName={styles.layerItem}
            items={displayLayerList}
            onDrag={onDragEnd}
          >
            {(layer, icon) => (
              <LayerItemConfig
                layer={layer}
                dragIcon={icon}
                onDelete={onDelete}
                onChange={(newLayer) => onLayerChange(layer, newLayer)}
                onCopy={copyLayer}
                onEditName={onEditName}
              />
            )}
          </DragList>
        )}
      </div>
      <div className={styles.layerListFooter}>
        <Button
          icon={<i className="dpiconfont dpicon-tianjia" />}
          className={styles.addFilterBtn}
          disabled={!selectDataset}
          type="ghost"
          onClick={() => addLayer(selectDataset as IDataset)}
        >
          添加图层
        </Button>
      </div>
    </div>
  );
};

export default AppLayerConfig;
