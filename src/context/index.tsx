import React from 'react';
import MapContextProvider from './MapContext';
import DatasetContextProvider from './DatasetContext';
import LayerContextProvider from './LayerContext';
import FilterContextProvider from './LayerContext';
import InteractiveContextProvider from './InteractiveContext';
import GlobalContextProvider from './GlobalContext';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <MapContextProvider>
      <DatasetContextProvider>
        <LayerContextProvider>
          <FilterContextProvider>
            <InteractiveContextProvider>
              <GlobalContextProvider>{children}</GlobalContextProvider>
            </InteractiveContextProvider>
          </FilterContextProvider>
        </LayerContextProvider>
      </DatasetContextProvider>
    </MapContextProvider>
  );
};

export default ContextProvider;
