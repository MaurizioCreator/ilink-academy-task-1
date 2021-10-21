import React from 'react';
import classes from './label.module.scss';

type ILabel = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<ILabel> = (props) => {
  return (
    <div className={props.className}>
      <label {...props} className={classes.label}>
        {props.children}
      </label>
    </div>
  );
};

export default Label;
