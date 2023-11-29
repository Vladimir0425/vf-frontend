import React, { useState } from 'react';
import clsx from 'clsx';

import { RadioContext } from './RadioContext';

import styles from './RadioGroup.module.scss';

export interface IRadioGroupProps {
  value?: string;
  className?: string;
  updateValue?: (_value: string) => void;
  children: React.ReactNode;
}

export function RadioGroup({
  value = '',
  className = '',
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
      <div className={clsx(styles.root, className)}>{children}</div>
    </RadioContext.Provider>
  );
}
