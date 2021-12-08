import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useDataset from '../../hooks/dataset';
import { filterByDatasetId, filterData } from '../../utils';
import type { ILayerConfig } from './LayerItem';
import LayerItem from './LayerItem';
import { IDataset, PropsType } from '../../typings';
import { ConfigModelContext } from '../../context/ConfigContext';
import { LayerEvent, Popup } from '@antv/l7-react';
import styles from './index.less';
import { transformProps } from './utils';

interface IPopupState {
  visible: boolean;
  datasetName: string;
  fields: { field: string; value: any }[];
  lngLat: {
    lng: number;
    lat: number;
  };
}

const AppLayerList: React.FC = () => {
  const { layerList, filterList, interactiveList } =
    useContext(ConfigModelContext);
  const [layerConfigList, setLayerConfigList] = useState<ILayerConfig[]>([]);
  const [propsList, setPropsList] = useState<PropsType[][]>([]);

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

  const onMouseOut = useCallback(() => {
    setPopup((newPopup) => {
      return {
        ...newPopup,
        visible: false,
      };
    });
  }, []);

  const onMouseMove = useCallback(
    (e: any, config: ILayerConfig) => {
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
              value: e?.feature?.properties?.[field] ?? '-',
            };
          }),
          lngLat: e.lngLat,
        });
      } else {
        onMouseOut();
      }
    },
    [interactiveList, onMouseOut],
  );

  useEffect(() => {
    (async () => {
      const newLayerConfigList = await Promise.all(
        displayLayerList.map((layer, layerIndex, array) => {
          const targetDataset = getTargetDataset(layer.datasetId) as IDataset;
          return filterData(
            targetDataset,
            filterByDatasetId(
              filterList.filter((item) => item.enable),
              targetDataset.id,
            ),
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
      );
      const propsList = newLayerConfigList.map((layerConfig) =>
        transformProps(
          layerConfig.layer,
          layerConfig.dataset,
          layerConfig.data.length,
        ),
      );
      setPropsList(propsList);
      setLayerConfigList(newLayerConfigList);
    })();
  }, [displayLayerList, filterList, getTargetDataset]);

  return (
    <>
      {layerConfigList.map((config, index) => {
        return (
          <LayerItem
            key={config.layer.id + config.layer.type}
            config={config}
            propsList={propsList[index]}
            event={
              <>
                <LayerEvent
                  type="mousemove"
                  handler={(e: any) => onMouseMove(e, config)}
                />
                <LayerEvent type="mouseout" handler={onMouseOut} />
              </>
            }
          />
        );
      })}
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
