import type { IHeatLayer } from '../../typings';
interface IProps {
    layer: IHeatLayer;
    onChange: (newLayer: IHeatLayer) => void;
}
declare const HeatLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default HeatLayer;
