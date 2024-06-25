import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../icons/logo.png';
import statelayer from '../../icons/state-layer.png';
import account from '../../icons/account.png';

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo"/>
      </Link>
      <div className={classes.settings}>
        <img className={classes.options} src={statelayer} />
        <img className={classes.account} src={account} />
      </div>
    </div>
  );
};

export default Header;