import React from 'react';

const searchBar = (props) => {
  return (
    <React.Fragment>
      <input type="text" placeholder="Search..." />
      <button type="button" onClick={props.clicked}>
        Go!
      </button>
    </React.Fragment>
  );
};

export default searchBar;
