import type {
  IHexLayer,
  ILayer,
  ILayerDoubleColor,
  ILayerFieldColor,
  ILayerSingleColor,
  ILineLayer,
  IPointLayer,
  IPolygonLayer,
  ITripLayer,
  ILayerRange,
} from '../../typings';
import { featureCollection, lineString, point, polygon } from '@turf/turf';
import type { ISourceOptions } from '@antv/l7-react/es/component/LayerAttribute';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';
import { h3ToGeoBoundary } from 'h3-js';
import { cloneDeep, merge } from 'lodash';

export const getPointList: (coordinates: string) => number[][] = (
  coordinates,
) => {
  return coordinates
    .split(';')
    .map((item) => item.split(',').map((item1) => +item1));
};

export const transformSource: (layer: ILayer, data: any[]) => ISourceOptions = (
  layer,
  data,
) => {
  const source: ISourceOptions = {
    data: featureCollection([]),
  };
  try {
    const { type } = layer;
    if (type === 'point') {
      const {
        config: { lngField, latField },
      } = layer as IPointLayer;
      if (lngField && latField) {
        source.data = featureCollection(
          data.map((item: any) =>
            point([+item[lngField], +item[latField]], item),
          ),
        );
      }
    }

    if (type === 'line') {
      const {
        config: { startLngField, startLatField, endLngField, endLatField },
      } = layer as ILineLayer;

      if (startLngField && startLatField && endLngField && endLatField) {
        source.data = featureCollection(
          data.map((item) =>
            lineString(
              [
                [+item[startLngField], +item[startLatField]],
                [+item[endLngField], +item[endLatField]],
              ],
              item,
            ),
          ),
        );
      }
    }

    if (type === 'polygon') {
      const {
        config: { geoField },
      } = layer as IPolygonLayer;

      if (geoField) {
        source.data = featureCollection(
          data.map((item) => {
            return polygon([getPointList(item[geoField])], item);
          }),
        );
      }
    }

    if (type === 'trip') {
      const {
        config: { geoField },
      } = layer as ITripLayer;

      if (geoField) {
        source.data = featureCollection(
          data.map((item) => lineString(getPointList(item[geoField]), item)),
        );
      }
    }

    if (type === 'hex') {
      const {
        config: { hexId },
      } = layer as IHexLayer;

      if (hexId) {
        source.data = featureCollection(
          data.map((item) => {
            const pointList = h3ToGeoBoundary(item[hexId]);
            return polygon([[...pointList, pointList[0]]], item);
          }),
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
  return source;
};

const getCommonLayerProps: (layer: ILayer) => Partial<ILayerProps> = (
  layer,
) => {
  return {
    options: {
      visible: layer.visible,
      blend: 'normal',
      zIndex: layer.zIndex,
      autoFit: true,
    },
    active: {
      option: {
        color: 'yellow',
      },
    },
    shape: {
      values: 'fill',
    },
  };
};

export const setColorProps = (
  props: Partial<ILayerProps>,
  colorConfig: ILayerSingleColor | ILayerDoubleColor | ILayerFieldColor,
) => {
  if (colorConfig.enable === false) {
    return;
  }
  if (colorConfig.field) {
    const { field, value: values } = colorConfig;
    Object.assign(props, {
      color: { field, values },
      scale: {
        values: {
          [field]: {
            type: 'quantile',
          },
        },
      },
    });
  } else {
    Object.assign(props, {
      color: {
        values: colorConfig.value,
      },
    });
  }
};

export const setSizeProps = (
  props: Partial<ILayerProps>,
  sizeConfig: ILayerRange,
) => {
  const { value, rangeValue, field } = sizeConfig;
  Object.assign(props, {
    size: { field: field ?? undefined, values: field ? rangeValue : value },
  });
};

export const transformProps: (layer: ILayer) => Omit<ILayerProps, 'source'>[] =
  (layer) => {
    const props: Partial<ILayerProps> = {
      ...getCommonLayerProps(layer),
    };

    if (layer.type === 'polygon') {
      const { config } = layer as IPolygonLayer;
      const { fillColor, borderColor, borderWidth } = config;
      const borderProps = cloneDeep(props);
      setColorProps(props, fillColor);

      borderProps.shape = {
        values: 'line',
      };
      setColorProps(borderProps, borderColor);
      setSizeProps(props, borderWidth);

      return [props, borderProps];
    }

    if (layer.type === 'point') {
      const { config } = layer as IPointLayer;
      const { fillColor, borderColor, radius } = config;
      setColorProps(props, fillColor);
      setSizeProps(props, radius);

      props.shape = {
        values: 'circle',
      };
      merge(props, {
        style: {
          stroke: borderColor.enable ? borderColor.value : undefined,
          strokeWidth: borderColor.enable ? 1 : 0,
        },
      });
    } else if (layer.type === 'line') {
      const { config } = layer as ILineLayer;
      const { lineType, color, lineWidth } = config;
      setColorProps(props, color);
      setSizeProps(props, lineWidth);
      Object.assign(props, {
        shape: {
          values: lineType ?? 'line',
        },
        style: {
          segmentNumber: 15,
        },
      });
    } else if (layer.type === 'trip') {
      const { config } = layer as ITripLayer;
      const { color, lineWidth } = config;
      setColorProps(props, color);
      setSizeProps(props, lineWidth);
      props.shape = {
        values: 'line',
      };
    } else if (layer.type === 'hex') {
      const { config } = layer as IHexLayer;
      const { fillColor } = config;
      setColorProps(props, fillColor);
    }

    return [props];
  };
