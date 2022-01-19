import { Button, Divider, Input, Modal, Slider } from 'antd';
import React, { useContext, useState } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlItem from './common/AppControlItem';
import styles from './index.less';
import { GlobalModelContext } from '../../context/GlobalContext';

const { TextArea } = Input;

export default function MapControl() {
  const { scene } = useContext(GlobalModelContext);
  const { mapPitch, setMapPitch, mapRotate, setMapRotate } =
    useContext(MapModelContext);
  const [visible, setVisible] = useState(false);
  const [mapInfoJson, setMapInfoJson] = useState('');

  return (
    <>
      <AppControlItem
        title="地图倾角"
        icon={<i className="dpiconfont dpicon-yinqing_jiaodu" />}
        dropdown={
          <div className={styles.mapPitch}>
            <div className={styles.mapPitchLabel}>
              <span>地图倾斜</span>
              <span>{mapPitch}°</span>
            </div>
            <Slider value={mapPitch} min={0} max={90} onChange={setMapPitch} />
            <Divider />
            <div className={styles.mapPitchLabel}>
              <span>地图旋转</span>
              <span>{mapRotate}°</span>
            </div>
            <Slider
              value={mapRotate}
              min={0}
              max={360}
              onChange={setMapRotate}
            />
            <Divider />
            <div style={{ textAlign: 'right' }}>
              <Button
                size="small"
                onClick={() => {
                  if (!scene) {
                    return;
                  }
                  const center = scene.getCenter();
                  const pitch = scene.getPitch();
                  const rotation = scene.getRotation();
                  const zoom = scene.getZoom();

                  setMapInfoJson(
                    JSON.stringify(
                      {
                        center: [center.lng, center.lat],
                        pitch: pitch,
                        zoom: zoom,
                        rotation: rotation,
                      },
                      null,
                      2,
                    ),
                  );
                  setVisible(true);
                }}
              >
                显示地图参数
              </Button>
            </div>
          </div>
        }
      />

      <Modal
        title="地图参数"
        visible={visible}
        footer={<Button onClick={() => setVisible(false)}>关闭</Button>}
      >
        <TextArea value={mapInfoJson} rows={10} />
      </Modal>
    </>
  );
}
