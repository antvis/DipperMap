import React, { useContext, useEffect, useMemo, useState } from 'react';
import useDataset from '../../hooks/dataset';
import { filterByDatasetId, filterData } from '../../utils';
import type { ILayerConfig } from './LayerItem';
import LayerItem from './LayerItem';
import { IDataset } from '../../typings';
import { ConfigModelContext } from '../../context/ConfigContext';
import { LayerEvent, Popup } from '@antv/l7-react';
import { useDebounceFn } from 'ahooks';
import styles from './index.less';

interface IPopupState {
  visible: boolean;
  datasetName: string;
  fields: { field: string; value: any }[];
  lngLat: {
    lng: number;
    lat: number;
  };
}

interface IProps {}

const AppLayerList: React.FC<IProps> = () => {
  const { layerList, filterList, interactiveList } =
    useContext(ConfigModelContext);
  const [layerConfigList, setLayerConfigList] = useState<ILayerConfig[]>([]);
  const [popup, setPopup] = useState<IPopupState>({
    visible: false,
    datasetName: '',
    fields: [],
    lngLat: {
      lng: 0,
      lat: 0,
    },
  });
  const { getTargetDataset } = useDataset();

  const displayLayerList = useMemo(
    () =>
      layerList.filter(
        (layer) => layer.visible && getTargetDataset(layer.datasetId),
      ),
    [getTargetDataset, layerList],
  );

  const onMouseOut = () => {
    setPopup((newPopup) => {
      return {
        ...newPopup,
        visible: false,
      };
    });
  };

  const onMouseMove = (e: any, config: ILayerConfig) => {
    const [targetInteractive] = filterByDatasetId(
      interactiveList,
      config.dataset.id,
    );
    if (targetInteractive?.enable) {
      const { fields } = targetInteractive;
      setPopup({
        visible: true,
        datasetName: config.dataset.name,
        fields: fields.map((field) => {
          return {
            field,
            value: e.feature.properties[field] ?? '-',
          };
        }),
        lngLat: e.lngLat,
      });
    } else {
      onMouseOut();
    }
  };

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
        <LayerItem
          key={config.layer.id}
          config={config}
          event={
            <>
              <LayerEvent
                type="mousemove"
                handler={(e: any) => onMouseMove(e, config)}
              />
              <LayerEvent type="mouseout" handler={() => onMouseOut()} />
            </>
          }
        />
      ))}
      {popup.visible && (
        <Popup lnglat={popup.lngLat} option={{ closeButton: false }}>
          <div className={styles.mapPopup}>
            <div className={styles.popupDatasetName}>{popup.datasetName}</div>
            {popup.fields.map((field) => (
              <div key={field.field} className={styles.popupFieldItem}>
                {field.field}: {field.value}
              </div>
            ))}
          </div>
        </Popup>
      )}
    </>
  );
};

export default AppLayerList;
