import React, { useEffect, useMemo, useState } from 'react';
import { transformProps, transformSource } from './utils';
import type { IDataset, ILayer, ILayerType } from '../../typings';
import type { ISourceOptions } from '@antv/l7-react/es/component/LayerAttribute';
import {
  HeatmapLayer,
  LineLayer,
  PointLayer,
  PolygonLayer,
} from '@antv/l7-react';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';
import ErrorBoundary from '../ErrorBoundary';
import { useDebounceEffect } from 'ahooks';
import { featureCollection } from '@turf/turf';

export interface ILayerConfig {
  layer: ILayer;
  dataset: IDataset;
  data: any[];
}

interface IProps {
  config: ILayerConfig;
  event: JSX.Element;
}

const LAYER_COMPONENT_MAP: Record<
  ILayerType,
  React.NamedExoticComponent<ILayerProps> | undefined
> = {
  point: PointLayer,
  line: LineLayer,
  polygon: PolygonLayer,
  trip: LineLayer,
  hex: PolygonLayer,
  heat: HeatmapLayer,
};

function getLayerKey(layer: ILayer, index: number) {
  if (layer.type === 'line') {
    return `${layer.id}+${index}-${layer.config.lineType}`;
  }
  return `${layer.id}-${index}`;
}

const LayerItem: React.FC<IProps> = React.memo(({ config, event }) => {
  const { layer, data } = config;

  const [propsList, setPropsList] = useState<Omit<ILayerProps, 'source'>[]>([]);
  const [source, setSource] = useState<ISourceOptions>({
    data: featureCollection([]),
  });

  useEffect(() => {
    setSource(transformSource(layer, data));
  }, [data, JSON.stringify(layer)]);

  useEffect(() => {
    setPropsList(transformProps(layer, data.length));
  }, [JSON.stringify(layer), data.length]);

  const LayerComponent = useMemo(() => {
    return LAYER_COMPONENT_MAP[layer.type];
  }, [layer.type]);
  return (
    <>
      {propsList.map((props, propsIndex) => {
        const key = getLayerKey(layer, propsIndex);
        return (
          <ErrorBoundary key={key}>
            {/* in case we accidentally remove a layer */}
            {LayerComponent && source.data.features.length ? (
              <LayerComponent
                key={getLayerKey(layer, propsIndex) + '-layer'}
                {...props}
                source={source}
              >
                {event}
              </LayerComponent>
            ) : null}
          </ErrorBoundary>
        );
      })}
    </>
  );
});

export default LayerItem;
