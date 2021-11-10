import type { IPointLayer } from '../../typings';
interface IProps {
    layer: IPointLayer;
    onChange: (newLayer: IPointLayer) => void;
}
declare const PointLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default PointLayer;
