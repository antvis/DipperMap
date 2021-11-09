import React from 'react';
import AppControlGroup from './common/AppControlGroup';
import MapTheme from './MapTheme';
// import MapDraw from './MapDraw';
import Preview from './Preview';

interface IProps {
  className?: string;
}

function AppControl({ className }: IProps) {
  return (
    <div className={className}>
      <AppControlGroup>
        {/*<MapDraw />*/}
        <MapTheme />
        <Preview />
      </AppControlGroup>
    </div>
  );
}

export default AppControl;
