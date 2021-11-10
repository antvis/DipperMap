import type { IBaseLayer } from '../../../typings';
interface IProps<P> {
    layer: P;
    onChange: (newLayer: P) => void;
}
declare function LayerTypeSelect<P extends IBaseLayer>({ layer, onChange }: IProps<P>): JSX.Element;
export default LayerTypeSelect;
