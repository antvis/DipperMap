import React from 'react';
import MapContextProvider from './MapContext';
import DatasetContextProvider from './DatasetContext';
import ConfigContextProvider from './ConfigContext';
import GlobalContextProvider from './GlobalContext';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <MapContextProvider>
      <DatasetContextProvider>
        <ConfigContextProvider>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </ConfigContextProvider>
      </DatasetContextProvider>
    </MapContextProvider>
  );
};

export default ContextProvider;
