import React, { useContext, useRef } from 'react';
import styles from './index.less';
import AppMap from '../components/AppMap';
import AppControl from '../components/AppControl';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import AppDataset from '../components/AppDataset';
import AppEdit from '../components/AppEdit';
import AppLayerList from '../components/AppLayerList';
import classnames from 'classnames';
import { GlobalModelContext } from '../context/GlobalContext';
import { MapModelContext } from '../context/MapContext';

export default function MapContainer() {
  const { isPreview } = useContext(GlobalModelContext);
  const { mapType } = useContext(MapModelContext);

  return (
    <div className={styles.container}>
      <AppMap map={mapType}>
        <AppControl
          className={classnames({
            [styles.control]: true,
            [styles.previewHidden]: isPreview,
          })}
        />
        <AppSidebar
          className={classnames({
            [styles.sidebar]: true,
            [styles.previewHidden]: isPreview,
          })}
        >
          <AppHeader />
          <AppDataset />
          <AppEdit />
        </AppSidebar>
        <AppLayerList />
      </AppMap>
    </div>
  );
}
