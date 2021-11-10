import type { ILayer } from '../../typings';
interface IProps {
    layer: ILayer;
    dragIcon: JSX.Element;
    onChange: (newLayer: Partial<ILayer>) => void;
    onEditName: (newName: string, layer: ILayer) => void;
    onCopy: (layer: ILayer) => void;
    onDelete: (layer: ILayer) => void;
}
declare const LayerItemConfig: ({ layer, onEditName, dragIcon, onChange, onDelete, onCopy, }: IProps) => JSX.Element;
export default LayerItemConfig;
