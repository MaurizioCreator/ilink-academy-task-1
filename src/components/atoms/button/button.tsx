import React, { useState } from 'react';
import classes from './button.module.scss';

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButton> = (props) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const disableButton = () => {
    setDisabled(true);
  };
  return (
    <div className={props.className}>
      <button {...props} onClick={disableButton} disabled={disabled} className={classes.button} />
    </div>
  );
};

export default Button;
