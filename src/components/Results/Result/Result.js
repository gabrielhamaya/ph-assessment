import React, { useState } from 'react';
import './Result.css';
import Card from '../../UI/Card';

const Result = (props) => {
  const [showResults, setShowResults] = React.useState(true);

  return (
    <Card id={props.video} playVideo={props.clicked}>
      <img alt="video thumbnail" src={props.thumbnail} />
      <span>{props.title}</span>
      {props.showSavedButton && showResults ? (
        <button
          className="Save"
          type="button"
          onClick={() => {
            props.save(props.videoData);
            setShowResults(false);
          }}
        >
          Save
        </button>
      ) : null}
    </Card>
  );
};

export default Result;
