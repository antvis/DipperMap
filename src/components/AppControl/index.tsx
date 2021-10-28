import React from 'react';
import AppControlGroup from './common/AppControlGroup';
import MapTheme from './MapTheme';
import MapDraw from './MapDraw';

interface IProps {
  className?: string;
}

function AppControl({ className }: IProps) {
  return (
    <div className={className}>
      <AppControlGroup>
        <MapDraw />
        <MapTheme />
      </AppControlGroup>
    </div>
  );
}

export default AppControl;
