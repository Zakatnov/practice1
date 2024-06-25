import React from 'react';
import classes from './Button.module.css';
import plusIcon from '../../../icons/Plus.png';

const Button = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <img src={plusIcon} alt="Plus Icon" /> <p>New project</p>
    </button>
  );
};

export default Button;