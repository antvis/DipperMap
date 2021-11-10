import * as React from 'react';
interface Props {
    value: string;
    disable?: boolean;
    onChange(color: string): void;
}
export declare const ColorPicker: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export {};
