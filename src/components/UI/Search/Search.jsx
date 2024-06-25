import React, { useState } from 'react';
import classes from './Search.module.css';
import searchIcon from '../../../icons/search.png';

const SearchInput = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className={classes.searchBlock}>
      <img src={searchIcon} alt="Search" className={classes.icon} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search...'
        className={classes.searchInput}
      />
    </div>
  );
};

export default SearchInput;