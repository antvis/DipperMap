import React, { createContext, useState } from 'react';
import { Scene } from '@antv/l7';

export interface IProps {
  scene: Scene | null;
  setScene: (newValue: Scene | null) => void;
  isPreview: boolean;
  setIsPreview: (newValue: boolean) => void;
  loading: boolean;
  setLoading: (newValue: boolean) => void;
}

// @ts-ignore
export const GlobalModelContext = createContext<IProps>();

const { Provider, Consumer } = GlobalModelContext;

export { Consumer };

const GlobalContextProvider: React.FC = ({ children }) => {
  const [scene, setScene] = useState<Scene | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Provider
      value={{
        loading,
        setLoading,
        isPreview,
        setIsPreview,
        scene,
        setScene,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContextProvider;
