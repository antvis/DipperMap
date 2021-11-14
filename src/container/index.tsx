import React, { useContext, useRef } from 'react';
import styles from './index.less';
import AppMap from '../components/AppMap';
import AppControl from '../components/AppControl';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import AppDataset from '../components/AppDataset';
import AppEdit from '../components/AppEdit';
import AppLayerList from '../components/AppLayerList';
import AppDragPanel from '../components/AppDragPanel';
import classnames from 'classnames';
import { GlobalModelContext } from '../context/GlobalContext';
import { MapModelContext } from '../context/MapContext';

export default function MapContainer() {
  const { isPreview } = useContext(GlobalModelContext);
  const { mapType } = useContext(MapModelContext);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const sidebarHeaderRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppMap className={styles.container} map={mapType}>
      <AppControl
        className={classnames({
          [styles.control]: true,
          [styles.previewHidden]: isPreview,
        })}
      />
      <AppSidebar
        ref={sidebarRef}
        className={classnames({
          [styles.sidebar]: true,
          [styles.previewHidden]: isPreview,
        })}
      >
        <AppHeader ref={sidebarHeaderRef} />
        <AppDragPanel
          sidebarRef={sidebarRef}
          sidebarHeaderRef={sidebarHeaderRef}
          TopComponent={AppDataset}
          BottomComponent={AppEdit}
        />
      </AppSidebar>
      <AppLayerList />
    </AppMap>
  );
}
