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
  IHeatLayer,
} from '../../typings';
import { featureCollection, lineString, point, polygon } from '@turf/turf';
import type { ISourceOptions } from '@antv/l7-react/es/component/LayerAttribute';
import type { ILayerProps } from '@antv/l7-react/lib/component/LayerAttribute';
import { h3ToGeoBoundary } from 'h3-js';
import { cloneDeep, merge } from 'lodash';
import { message } from 'antd';
import { POINT_TO_SQUARE_LIMIT } from '../../constants';

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
    if (['point', 'heat'].includes(type)) {
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
            const pointList = h3ToGeoBoundary(item[hexId]).map((item) =>
              item.reverse(),
            );
            pointList.push(pointList[0]);
            return polygon([pointList], item);
          }),
        );
      }
    }
  } catch (e) {
    console.error(e);
    message.error('数据解析有误');
  }
  return source;
};

const getCommonLayerProps: (layer: ILayer) => Partial<ILayerProps> = (
  layer,
) => {
  return {
    options: {
      visible: layer.visible,
      blend: layer.config.blendType,
      zIndex: layer.zIndex,
      opacity: layer.config.opacity / 100 ?? 1,
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
  } else if (Array.isArray(colorConfig.value)) {
    const [targetColor, sourceColor] = colorConfig.value;
    props.style = Object.assign(props.style || {}, {
      targetColor,
      sourceColor,
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

export const transformProps: (
  layer: ILayer,
  dataLength: number,
) => Omit<ILayerProps, 'source'>[] = (layer, dataLength) => {
  const props: Partial<ILayerProps> = {
    ...getCommonLayerProps(layer),
  };

  if (layer.type === 'heat') {
    const { config } = layer as IHeatLayer;
    const { fillColor, ranges, intense, radius } = config;
    let positions: number[] = [];

    if (fillColor?.value && Array.isArray(fillColor.value)) {
      // 区间长度
      const sectionLen = ranges[1] - ranges[0] / fillColor.value.length;
      positions = (fillColor.value as string[]).map(
        (_, i) => ranges[0] + i * sectionLen,
      );
    }

    merge(props, {
      values: 'heatmap',
      style: {
        intense,
        radius,
        rampColors: {
          colors: fillColor?.value || [],
          positions,
        },
      },
    });
  }

  if (layer.type === 'polygon') {
    const { config } = layer as IPolygonLayer;
    const { fillColor, borderColor, borderWidth } = config;
    const borderProps = cloneDeep(props);
    setColorProps(props, fillColor);

    borderProps.shape = {
      values: 'line',
    };
    setColorProps(borderProps, borderColor);
    setSizeProps(borderProps, borderWidth);

    return [props, borderProps];
  }

  if (layer.type === 'point') {
    const { config } = layer as IPointLayer;
    const { fillColor, borderColor, radius, size = 40, shape } = config;
    setColorProps(props, fillColor);

    if (shape) {
      props.shape = {
        values: shape,
      };
      props.size = {
        values: [1, 2, size],
      };
    } else if (dataLength > POINT_TO_SQUARE_LIMIT) {
      props.shape = {
        values: 'square',
      };
      props.size = {
        values: 1,
      };
    } else {
      props.shape = {
        values: 'circle',
      };
      setSizeProps(props, radius);
    }
    merge(props, {
      style: {
        stroke: borderColor.enable ? borderColor.value : undefined,
        strokeWidth: borderColor.enable ? 1 : 0,
      },
    });
    console.log(props);
  }
  if (layer.type === 'line') {
    const { config } = layer as ILineLayer;
    const { lineType, color, lineWidth } = config;
    Object.assign(props, {
      shape: {
        values: lineType ?? 'line',
      },
      style: {
        segmentNumber: 15,
      },
    });
    setColorProps(props, color);
    setSizeProps(props, lineWidth);
  }
  if (layer.type === 'trip') {
    const { config } = layer as ITripLayer;
    const { color, lineWidth } = config;
    setColorProps(props, color);
    setSizeProps(props, lineWidth);
    props.shape = {
      values: 'line',
    };
  }
  if (layer.type === 'hex') {
    const { config } = layer as IHexLayer;
    const { fillColor } = config;
    setColorProps(props, fillColor);
  }

  return [props];
};
