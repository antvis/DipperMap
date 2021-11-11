import type { ILayer, IDataset, ILayerType } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils/tools';
import { useCallback, useContext } from 'react';
import { cloneDeep } from 'lodash';
import {
  DEFAULT_LINE_LAYER_CONFIG,
  DEFAULT_POINT_LAYER_CONFIG,
  DEFAULT_TRIP_LAYER_CONFIG,
  DEFAULT_POLYGON_LAYER_CONFIG,
  DEFAULT_HEX_LAYER_CONFIG,
  DEFAULT_HEAT_LAYER_CONFIG,
} from '../constants';
import { ConfigModelContext } from '../context/ConfigContext';

const useLayer = () => {
  const { layerList, setLayerList } = useContext(ConfigModelContext);

  const getDefaultConfig = useCallback((type: ILayerType) => {
    let config: any = {};
    if (type === 'point') {
      config = DEFAULT_POINT_LAYER_CONFIG;
    }
    if (type === 'line') {
      config = DEFAULT_LINE_LAYER_CONFIG;
    }
    if (type === 'trip') {
      config = DEFAULT_TRIP_LAYER_CONFIG;
    }
    if (type === 'polygon') {
      config = DEFAULT_POLYGON_LAYER_CONFIG;
    }
    if (type === 'hex') {
      config = DEFAULT_HEX_LAYER_CONFIG;
    }

    if (type === 'heat') {
      config = DEFAULT_HEAT_LAYER_CONFIG;
    }
    return cloneDeep(config);
  }, []);

  const addLayer: (dataset: IDataset) => ILayer = useCallback(
    (dataset) => {
      const { id } = dataset;
      const newLayer: ILayer = {
        id: getRandomId('layer'),
        name: generateUnRepeatValue<ILayer, string>(layerList, 'name', '图层'),
        order: layerList.length + 1,
        datasetId: id,
        createTime: Date.now(),
        config: getDefaultConfig('point'),
        type: 'point',
        visible: true,
        zIndex: 0,
      };
      const newlayerList = [...layerList, newLayer];
      setLayerList(newlayerList);
      return newLayer;
    },
    [getDefaultConfig, layerList, setLayerList],
  );

  const copyLayer = useCallback(
    (filter: ILayer) => {
      const newFilter: ILayer = {
        ...cloneDeep(filter),
        id: getRandomId('layer'),
        name: generateUnRepeatValue<ILayer, string>(layerList, 'name', '图层'),
        order: layerList.length + 1,
        createTime: Date.now(),
      };

      setLayerList([...layerList, newFilter]);

      return newFilter;
    },
    [layerList, setLayerList],
  );

  return {
    addLayer,
    copyLayer,
    getDefaultConfig,
  };
};

export default useLayer;
