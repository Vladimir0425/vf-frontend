import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

import {
  BgColorType,
  BorderType,
  RoundedType,
  AdornmentType,
  IAdornment,
} from '../Input';

import styles from './TextField.module.scss';

export interface ITextFieldProps {
  value?: string;
  updateValue?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
  rounded?: RoundedType;
  border?: BorderType;
  bgcolor?: BgColorType;
  adornment?: IAdornment;
}

export function TextField({
  rows = 4,
  placeholder = '',
  className = '',
  updateValue,
  rounded = 'small',
  border = 'solid',
  bgcolor = 'primary',
  adornment,
  ...nativeAttrs
}: ITextFieldProps) {
  const classes = clsx(
    styles.root,
    rounded === 'full' ? styles.roundedFull : '',
    border === 'none' ? styles.borderNone : '',
    bgcolor === 'secondary' ? styles.bgColorSec : '',
    adornment && adornment.position === 'left'
      ? styles.leftAdornment
      : adornment && adornment.position === 'right'
      ? styles.rightAdornment
      : '',
    className,
  );

  return (
    <div className={classes}>
      <textarea
        rows={rows}
        placeholder={placeholder}
        onChange={updateValue}
        {...nativeAttrs}
      />
      {adornment ? (
        <span
          className={clsx(
            adornment.position === 'left'
              ? styles.leftAdorn
              : styles.rightAdorn,
            typeof adornment.content === 'string'
              ? styles.textBar
              : styles.circleBar,
          )}
        >
          {adornment.content}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
