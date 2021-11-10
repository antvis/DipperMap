import type { DeepPartial, IBaseLayer } from '../../../typings';
declare const useCommonHook: <P extends IBaseLayer, T>(layer: P, onChange: (newLayer: P) => void) => {
    targetDataset: import("../../../typings").IDataset<Record<string, any>> | null;
    targetDatasetFields: import("../../../typings").IDatasetField<string>[];
    onFormChange: (changedConfig: DeepPartial<T>) => void;
};
export default useCommonHook;
