interface IProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}
declare const AddDatasetModal: ({ visible, setVisible, loading, setLoading, }: IProps) => JSX.Element;
export default AddDatasetModal;
