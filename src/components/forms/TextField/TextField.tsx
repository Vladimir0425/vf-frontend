import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './TextField.module.scss';

export interface ITextFieldProps {
  value?: string;
  updateValue?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export function TextField({
  rows = 4,
  placeholder = '',
  className = '',
  updateValue,
  ...nativeAttrs
}: ITextFieldProps) {
  const classes = clsx(styles.root, className);

  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={classes}
      onChange={updateValue}
      {...nativeAttrs}
    />
  );
}
