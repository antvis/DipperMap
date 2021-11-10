import React from 'react';
import { IPlan } from '../typings';
export interface IProps {
    isPreview: boolean;
    setIsPreview: (newValue: boolean) => void;
    selectPlan: IPlan | null;
    setSelectPlan: (newPlan: IPlan | null) => void;
}
export declare const GlobalModelContext: React.Context<IProps>;
declare const Consumer: React.Consumer<IProps>;
export { Consumer };
declare const GlobalContext: React.FC;
export default GlobalContext;
