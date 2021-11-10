interface IProps {
    name: string;
    onChange: (newName: string) => void;
    className?: string;
}
declare const EditName: ({ name, onChange, className }: IProps) => JSX.Element;
export default EditName;
