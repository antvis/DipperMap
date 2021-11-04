import React, { useCallback, useMemo } from 'react';
import { transformProps, transformSource } from './utils';
import type { IDataset, ILayer, ILayerType } from '../../typings';
import type { ISourceOptions } from '@antv/l7-react/es/component/LayerAttribute';
import { LineLayer, PointLayer, PolygonLayer } from '@antv/l7-react';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';
import ErrorBoundary from '../ErrorBoundary';

export interface ILayerConfig {
  layer: ILayer;
  dataset: IDataset;
  data: any[];
}

interface IProps {
  config: ILayerConfig;
}

const LAYER_COMPONENT_MAP: Record<
  ILayerType,
  React.NamedExoticComponent<ILayerProps>
> = {
  point: PointLayer,
  line: LineLayer,
  polygon: PolygonLayer,
  trip: LineLayer,
  hex: PolygonLayer,
};

const LayerItem: React.FC<IProps> = React.memo(({ config }) => {
  const { layer, data } = config;

  const source: ISourceOptions = useMemo(() => {
    return transformSource(layer, data);
  }, [data, layer]);

  const propsList = useMemo(() => {
    return transformProps(layer);
  }, [layer]);

  const getLayerKey = useCallback((layer: ILayer, index: number) => {
    if (layer.type === 'line') {
      return `${layer.id}+${index}-${layer.config.lineType}`;
    }
    return `${layer.id}-${index}`;
  }, []);

  const LayerComponent = useMemo(() => {
    return LAYER_COMPONENT_MAP[layer.type];
  }, [layer.type]);

  return (
    <>
      {propsList.map((props, propsIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <ErrorBoundary key={getLayerKey(layer, propsIndex)}>
          <LayerComponent
            key={getLayerKey(layer, propsIndex) + '-layer'}
            {...props}
            source={source}
          />
        </ErrorBoundary>
      ))}
    </>
  );
});

export default LayerItem;
