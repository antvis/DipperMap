import { IPlan } from '../typings';
import { useCallback, useContext } from 'react';
import { DatasetModelContext } from '../context/DatasetContext';
import { MapModelContext } from '../context/MapContext';
import { LayerModelContext } from '../context/LayerContext';
import { FilterModelContext } from '../context/FilterContext';
import { InteractiveModelContext } from '../context/InteractiveContext';
import { dataTransform } from '../components/AppDataset/dataTrans';
import request from 'umi-request';
import { getRandomId } from '../utils';
import useDataset from './useDataset';

const usePlan = () => {
  const { addDataset } = useDataset();
  const { setMapConfig } = useContext(MapModelContext);
  const { setDatasetList } = useContext(DatasetModelContext);
  const { setLayerList } = useContext(LayerModelContext);
  const { setFilterList } = useContext(FilterModelContext);
  const { setInteractiveList } = useContext(InteractiveModelContext);

  const onImportPlan = useCallback(
    (demo: IPlan) => {
      return Promise.all(
        (demo.exportDatasetList ?? []).map(async (data) => {
          const result = dataTransform({
            data: await request(data.src),
          });
          return addDataset({
            name: data.name,
            url: data.src,
            data: result.data,
            fields: result.fields,
            geoJson: result.geoJson,
            id: data.datasetId || getRandomId('dataset'),
          });
        }),
      ).then((res) => {
        if (demo.mapConfig) {
          setMapConfig(demo.mapConfig);
        }
        setDatasetList([...(demo.datasetList || []), ...res]);
        setLayerList(demo.layerList ?? []);
        setFilterList(demo.filterList ?? []);
        setInteractiveList(demo.interactiveList ?? []);
      });
    },
    [
      addDataset,
      setDatasetList,
      setFilterList,
      setInteractiveList,
      setLayerList,
      setMapConfig,
    ],
  );

  return {
    onImportPlan,
  };
};

export default usePlan;
