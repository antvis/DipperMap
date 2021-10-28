import React, { useEffect, useMemo, useState } from 'react';
import { useModel } from '@alipay/bigfish';
import useDataset from '../../hooks/dataset';
import { filterData } from '../../utils';
import type { ILayerConfig } from './LayerItem';
import LayerItem from './LayerItem';
import { IDataset } from '../../typings';

interface IProps {}

const AppLayerList: React.FC<IProps> = () => {
  const { layerList, filterList, filterByDatasetId } = useModel('config');
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
  }, [displayLayerList, filterByDatasetId, filterList, getTargetDataset]);

  return (
    <>
      {layerConfigList.map((config) => (
        <LayerItem key={config.layer.id} config={config} />
      ))}
    </>
  );
};

export default AppLayerList;
