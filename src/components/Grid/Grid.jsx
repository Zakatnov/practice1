import React from 'react';
import classes from './Grid.module.css';

const Grid = ({ items, renderItem, onItemClick }) => {
  return (
    <div className={classes.grid}>
      {items.map((item, index) => (
        <div
          key={index}
          className={classes.gridItem}
          onClick={() => onItemClick && onItemClick(item)}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};

export default Grid;