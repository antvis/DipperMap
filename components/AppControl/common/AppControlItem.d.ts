import React from 'react';
interface IProps {
    icon?: JSX.Element;
    text: string;
    dropdown?: JSX.Element;
    trigger?: ('click' | 'hover' | 'contextMenu')[];
    onActiveChange?: (active: boolean) => void;
}
declare const AppControlItem: React.FC<IProps>;
export default AppControlItem;
