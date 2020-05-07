import React from 'react';

import './Card.css';

const card = (props) => {
  return (
    <div
      className="card"
      onClick={() => props.playVideo(props.id)}
      role="button"
      onKeyPress={() => props.playVideo(props.id)}
      tabIndex={0}
    >
      {props.children}
    </div>
  );
};

export default card;
