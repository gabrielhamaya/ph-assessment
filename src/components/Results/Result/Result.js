import React from 'react';
import './Result.css';
import Card from '../../UI/Card';

const result = (props) => {
  return (
    <Card id={props.video} playVideo={props.clicked}>
      <img alt="video thumbnail" src={props.thumbnail} />
      <span>{props.title}</span>
      <button type="button" onClick={() => props.save(props.videoData)}>
        Save
      </button>
    </Card>
  );
};

export default result;
