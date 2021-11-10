import type { ITripLayer } from '../../typings';
interface IProps {
    layer: ITripLayer;
    onChange: (newLayer: ITripLayer) => void;
}
declare const TripLayer: ({ layer, onChange }: IProps) => JSX.Element;
export default TripLayer;
