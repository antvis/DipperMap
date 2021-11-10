import type { ILineLayer } from '../../typings';
interface IProps {
    layer: ILineLayer;
    onChange: (newLayer: ILineLayer) => void;
}
declare const LineLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default LineLayer;
