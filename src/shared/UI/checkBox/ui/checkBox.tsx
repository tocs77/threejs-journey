/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { generateID } from '@/shared/lib/';
import CheckboxCheckedIcon from '@/shared/assets/icons/checkboxCheckedIcon';
import CheckboxUncheckedIcon from '@/shared/assets/icons/checkBoxUncheckedIcon';

import classes from './checkBox.module.scss';

interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  id?: string;
  value: boolean;
  size: number;
  changed: () => void;
  title?: string;
  stopPropagation?: boolean;
}

export const CheckBox = (props: CheckBoxProps) => {
  const { id, value, size, title, changed, stopPropagation, ...otherProps } = props;
  const [checkId, setCheckId] = useState('');

  useEffect(() => {
    const newId = id || generateID();
    setCheckId(newId);
  }, []);

  const checkBoxSize = size + 'px';
  const fontSize = size * 0.8 + 'px';
  const gap = size * 0.2 + 'px';

  const changeHandler = (e: React.ChangeEvent) => {
    if (stopPropagation) e.stopPropagation();
    changed();
  };

  return (
    <>
      <input
        type='checkbox'
        id={checkId}
        className={classes.chk_box}
        onChange={(e) => changeHandler(e)}
        checked={value}
        data-testid='checkbox_input'
        {...otherProps}
      />
      <label htmlFor={checkId} className={classes.label} data-testid='checkbox_label'>
        <div className={classes.label_container} style={{ gap: gap }}>
          <div className={classes.checkbox_out} style={{ height: checkBoxSize, width: checkBoxSize }}>
            {value ? (
              <CheckboxCheckedIcon className={classes.icon_on} size={size} />
            ) : (
              <CheckboxUncheckedIcon className={classes.icon_off} size={size} />
            )}
          </div>
          {title ? <p style={{ fontSize: fontSize }}>{title}</p> : null}
        </div>
      </label>
    </>
  );
};
