import React, { createContext, useState } from 'react';

export interface IProps {
  isPreview: boolean;
  setIsPreview: (newValue: boolean) => void;
}

// @ts-ignore
export const GlobalModelContext = createContext<IProps>();

const { Provider, Consumer } = GlobalModelContext;

export { Consumer };

const GlobalContext: React.FC = ({ children }) => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <Provider
      value={{
        isPreview,
        setIsPreview,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContext;
