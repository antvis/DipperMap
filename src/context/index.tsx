import React from 'react';
import MapContextProvider from './MapContext';
import DatasetContextProvider from './DatasetContext';
import ConfigContextProvider from './ConfigContext';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <MapContextProvider>
      <DatasetContextProvider>
        <ConfigContextProvider>{children}</ConfigContextProvider>
      </DatasetContextProvider>
    </MapContextProvider>
  );
};

export default ContextProvider;
