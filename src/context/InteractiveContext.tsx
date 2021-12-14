import React, { createContext, useState } from 'react';
import { IInteractive } from '../typings';
import useIndexdb from '../hooks/useIndexdb';

export interface IProps {
  interactiveList: IInteractive[];
  setInteractiveList: (value: IInteractive[]) => void;
}

// @ts-ignore
export const InteractiveModelContext = createContext<IProps>();

const { Provider, Consumer } = InteractiveModelContext;

export { Consumer };

const InteractiveContextProvider: React.FC = ({ children }) => {
  const [interactiveList, setInteractiveList] = useState<IInteractive[]>([]);

  useIndexdb(interactiveList, setInteractiveList, 'INTERACTIVE_LIST', []);

  return (
    <Provider
      value={{
        interactiveList,
        setInteractiveList,
      }}
    >
      {children}
    </Provider>
  );
};

export default InteractiveContextProvider;
