import React, { useContext } from 'react';
import { MapModelContext } from '../../context/MapContext';
import AppControlGroup from './common/AppControlGroup';
import MapControl from './MapControl';
import MapTheme from './MapTheme';
import MapType from './MapType';
import Preview from './Preview';

interface IProps {
  className?: string;
}

function AppControl({ className }: IProps) {
  const { mapPitch, setMapPitch, mapRotate, setMapRotate } =
    useContext(MapModelContext);

  return (
    <div className={className}>
      <AppControlGroup>
        {/*<MapDraw />*/}
        <MapType />
        <MapTheme />
        <MapControl title="地图倾角" value={mapPitch} setValue={setMapPitch} />
        <MapControl
          title="地图旋转"
          value={mapRotate}
          setValue={setMapRotate}
          max={360}
        />
        <Preview />
      </AppControlGroup>
    </div>
  );
}

export default AppControl;
