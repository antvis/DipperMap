import React, { createContext, useState } from 'react';
import { IPlan } from '../typings';

export interface IProps {
  isPreview: boolean;
  setIsPreview: (newValue: boolean) => void;
  selectPlan: IPlan | null;
  setSelectPlan: (newPlan: IPlan | null) => void;
}

// @ts-ignore
export const GlobalModelContext = createContext<IProps>();

const { Provider, Consumer } = GlobalModelContext;

export { Consumer };

const GlobalContextProvider: React.FC = ({ children }) => {
  const [isPreview, setIsPreview] = useState(false);
  const [selectPlan, setSelectPlan] = useState<IPlan | null>(null);

  return (
    <Provider
      value={{
        isPreview,
        setIsPreview,
        selectPlan,
        setSelectPlan,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContextProvider;
