import React from 'react';
interface IProps {
    sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
    sidebarHeaderRef: React.MutableRefObject<HTMLDivElement | null>;
    TopComponent: React.FC<{
        style?: React.CSSProperties;
    }>;
    BottomComponent: React.FC<{
        style?: React.CSSProperties;
    }>;
    className?: string;
}
declare const AppDragPanel: React.FC<IProps>;
export default AppDragPanel;
