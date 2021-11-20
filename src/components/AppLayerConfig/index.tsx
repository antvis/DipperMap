import React, { useCallback, useContext, useMemo } from 'react';
import { Empty } from 'antd';
import useListHook from '../../hooks/list';
import useLayer from '../../hooks/layer';
import type { IDataset, ILayer } from '../../typings';
import DragList from '../DragList';
import LayerItemConfig from './LayerItemConfig';
import { ConfigModelContext } from '../../context/ConfigContext';
import { filterByDatasetId } from '../../utils';
import { DatasetModelContext } from '../../context/DatasetContext';
import AddBtn from '../AppEdit/AddBtn';

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
    <div className="editPanel">
      <div className="editPanelContent">
        {!displayLayerList.length ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无图层" />
        ) : (
          <DragList
            itemClassName="editItem"
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
      <div className="editPanelFooter">
        <AddBtn
          text="添加图层"
          onClick={() => addLayer(selectDataset as IDataset)}
        />
      </div>
    </div>
  );
};

export default AppLayerConfig;
