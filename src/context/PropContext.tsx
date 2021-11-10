import React, { createContext, useState } from 'react';
import { IGlobalProps, IPlan } from '../typings';

// @ts-ignore
export const PropsModelContext = createContext<IGlobalProps>();

const { Provider, Consumer } = PropsModelContext;

export { Consumer };

const PropsContextProvider: React.FC<{ value: IGlobalProps }> = ({
  children,
  value,
}) => {
  return <Provider value={value}>{children}</Provider>;
};

export default PropsContextProvider;
