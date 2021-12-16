import { GeometryTypes } from '@turf/turf';
import { IDatasetFieldType, ILayerType } from '../typings';

export const GEO_TO_LAYER_TYPE_MAP: Partial<Record<GeometryTypes, ILayerType>> =
  {
    Point: 'point',
    LineString: 'trip',
    Polygon: 'polygon',
    MultiPoint: 'point',
    MultiLineString: 'trip',
    MultiPolygon: 'polygon',
  };

export const DATASET_FIELD_TYPE_COLOR: Record<IDatasetFieldType, string> = {
  string: 'green',
  number: 'gold',
  boolean: 'blue',
};
