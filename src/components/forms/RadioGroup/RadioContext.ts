import React from 'react';

export interface IRadioContext {
  value: string;
  updateValue: (_value: string) => void;
}

export const initialContext: IRadioContext = {
  value: '',
  updateValue: () => {},
};

export const RadioContext: React.Context<IRadioContext> =
  React.createContext(initialContext);
