import React from 'react';
import AppControlGroup from './common/AppControlGroup';
import MapPitch from './MapPitch';
import MapTheme from './MapTheme';
import MapType from './MapType';
import Preview from './Preview';

interface IProps {
  className?: string;
}

function AppControl({ className }: IProps) {
  return (
    <div className={className}>
      <AppControlGroup>
        {/*<MapDraw />*/}
        <MapType />
        <MapTheme />
        <MapPitch />
        <Preview />
      </AppControlGroup>
    </div>
  );
}

export default AppControl;
