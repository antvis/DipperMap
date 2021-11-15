import { useCallback, useMemo } from 'react';
import type { DeepPartial, IBaseLayer } from '../../../typings';
import useDataset from '../../../hooks/dataset';
import { debounce, merge } from 'lodash';

const useCommonHook = <P extends IBaseLayer, T>(
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
    debounce((changedConfig: DeepPartial<T>) => {
      console.log(changedConfig);
      onChange(
        merge({}, layer, {
          config: changedConfig,
        }),
      );
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
