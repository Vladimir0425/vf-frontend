import React, { useContext } from 'react';
import clsx from 'clsx';

import { RadioContext } from './RadioContext';

import styles from './Radio.module.scss';

export interface IRadio {
  label?: string | React.ReactNode;
  value?: string;
}

export function Radio({ label = '', value = '' }: IRadio) {
  const context = useContext(RadioContext);

  return (
    <div className={styles.root} onClick={() => context.updateValue(value)}>
      <span
        className={
          context.value === value
            ? clsx(styles.radio, styles.active)
            : styles.radio
        }
      />
      <span>{label}</span>
    </div>
  );
}
