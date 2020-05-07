import React from 'react';

const button = (props) => (
  <button type="button" onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
