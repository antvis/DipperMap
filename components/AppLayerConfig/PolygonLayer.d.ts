import type { IPolygonLayer } from '../../typings';
interface IProps {
    layer: IPolygonLayer;
    onChange: (newLayer: IPolygonLayer) => void;
}
declare const PolygonLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default PolygonLayer;
