import React from 'react';
import './Button.css';

const button = (props) => (
  <button className="Save" type="button" onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
