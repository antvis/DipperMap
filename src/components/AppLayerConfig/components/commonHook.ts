import { useCallback, useMemo } from 'react';
import type { IBaseLayer } from '../../../typings';
import useDataset from '../../../hooks/dataset';
import { debounce, merge } from 'lodash';
import { FormInstance } from 'antd';

const useCommonHook = <P extends IBaseLayer, T>(
  form: FormInstance<T>,
  layer: P,
  onChange: (newLayer: P) => void,
) => {
  const { getTargetDataset } = useDataset();

  const targetDataset = useMemo(
    () => getTargetDataset(layer.datasetId),
    [layer.datasetId, getTargetDataset],
  );

  const targetDatasetFields = useMemo(
    () => targetDataset?.fields ?? [],
    [targetDataset],
  );

  const onFormChange = useCallback(
    debounce(() => {
      const newLayer = merge({}, layer, {
        config: form.getFieldsValue(),
      });
      onChange(newLayer);
    }, 300),
    [onChange, layer],
  );

  return {
    targetDataset,
    targetDatasetFields,
    onFormChange,
  };
};

export default useCommonHook;
