interface IProps {
    value?: [string, string];
    onChange?: (newValue: [string, string]) => void;
}
declare const RangeColorPicker: ({ value, onChange, }: IProps) => JSX.Element;
export default RangeColorPicker;
