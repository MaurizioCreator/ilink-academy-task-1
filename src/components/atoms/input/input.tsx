import React, { useState } from 'react';
import classes from './input.module.scss';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Input> = (props) => {
  const [valid, setValid] = useState<boolean>(false);

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const InputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className={classes.input}
        required={valid}
        onChange={InputChangeHandler}
        onBlur={InputBlurHandler}
      />
      {valid && <div className={classes.input_error}>Something goes wrong</div>}
    </div>
  );
};

export default Input;
