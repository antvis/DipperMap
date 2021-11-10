import type { IHexLayer } from '../../typings';
interface IProps {
    layer: IHexLayer;
    onChange: (newLayer: IHexLayer) => void;
}
declare const HexLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default HexLayer;
