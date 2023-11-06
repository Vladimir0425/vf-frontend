import React, { useState } from 'react';

import { RadioContext } from './RadioContext';

import styles from './RadioGroup.module.scss';

export interface IRadioGroupProps {
  value?: string;
  updateValue?: (_value: string) => void;
  children: React.ReactNode;
}

export function RadioGroup({
  value = '',
  updateValue = () => {},
  children,
}: IRadioGroupProps) {
  return (
    <RadioContext.Provider
      value={{
        value,
        updateValue,
      }}
    >
      <div className={styles.root}>{children}</div>
    </RadioContext.Provider>
  );
}
