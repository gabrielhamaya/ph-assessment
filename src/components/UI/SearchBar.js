import React from 'react';
import './SearchBar.css';

const searchBar = (props) => {
  return (
    <React.Fragment>
      <input className="Bar" type="text" placeholder="Search..." />
      <button type="button" onClick={props.clicked}>
        Go!
      </button>
    </React.Fragment>
  );
};

export default searchBar;
