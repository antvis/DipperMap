import type { ModalProps } from 'antd';
interface IProps extends ModalProps {
    value?: string;
    setVisible: (newVisible: boolean) => void;
    onChange: (newValue: string) => void;
}
declare const DatasetModal: ({ value, visible, setVisible, onChange, ...props }: IProps) => JSX.Element;
export default DatasetModal;
