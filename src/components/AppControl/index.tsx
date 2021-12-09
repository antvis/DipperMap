import React, { useContext } from 'react';
import AppControlGroup from './common/AppControlGroup';
import MapControl from './MapControl';
import MapTheme from './MapTheme';
import MapType from './MapType';
import Preview from './Preview';
import MapLayer from './MapLayer';
import { MapModelContext } from '../../context/MapContext';

interface IProps {
  className?: string;
}

function AppControl({ className }: IProps) {
  const { mapType } = useContext(MapModelContext);

  return (
    <div className={className}>
      <AppControlGroup>
        {/*<MapDraw />*/}
        <MapType />
        {mapType === 'amap' && <MapLayer />}
        <MapTheme />
        <MapControl />
        <Preview />
      </AppControlGroup>
    </div>
  );
}

export default AppControl;
