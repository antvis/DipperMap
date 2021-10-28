import React, { useContext, useEffect, useMemo, useState } from 'react';
import useDataset from '../../hooks/dataset';
import { filterByDatasetId, filterData } from '../../utils';
import type { ILayerConfig } from './LayerItem';
import LayerItem from './LayerItem';
import { IDataset } from '../../typings';
import { ConfigModelContext } from '../../context/ConfigContext';

interface IProps {}

const AppLayerList: React.FC<IProps> = () => {
  const { layerList, filterList } = useContext(ConfigModelContext);
  const [layerConfigList, setLayerConfigList] = useState<ILayerConfig[]>([]);
  const { getTargetDataset } = useDataset();

  const displayLayerList = useMemo(
    () =>
      layerList.filter(
        (layer) => layer.visible && getTargetDataset(layer.datasetId),
      ),
    [getTargetDataset, layerList],
  );

  useEffect(() => {
    Promise.all(
      displayLayerList.map((layer, layerIndex, array) => {
        const targetDataset = getTargetDataset(layer.datasetId) as IDataset;
        return filterData(
          targetDataset,
          filterByDatasetId(filterList, targetDataset.id),
        ).then((data: any[]) => {
          return {
            layer: Object.assign(layer, {
              zIndex: array.length - layerIndex,
            }),
            dataset: targetDataset,
            data,
          };
        });
      }),
    ).then((newLayerConfigList) => {
      setLayerConfigList(newLayerConfigList);
    });
  }, [displayLayerList, filterList, getTargetDataset]);

  return (
    <>
      {layerConfigList.map((config) => (
        <LayerItem key={config.layer.id} config={config} />
      ))}
    </>
  );
};

export default AppLayerList;
