import { IDataset } from '../../typings';
import { LAYER_TYPE_LIST } from '../../constants';

export const GEO_JSON_TOOLTIP =
  '请以","分隔经纬度，以";"分隔各点，如: 12.1,13.4;54.1,69.2...或以GeoJson数组形式导入';

export const FORM_LAYOUT = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};

export const getLayerTypes = (dataset?: IDataset | null) => {
  if (dataset?.geoJson?.enable) {
    const layerTypes = dataset?.geoJson?.layerTypes ?? [];
    return LAYER_TYPE_LIST.filter((option) =>
      layerTypes.includes(option.value),
    );
  }
  return LAYER_TYPE_LIST;
};
