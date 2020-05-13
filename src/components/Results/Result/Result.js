import React from 'react';
import './Result.css';
import Card from '../../UI/Card';

const Result = (props) => {
  let show = true;
  if (props.showSavedButton) {
    if (
      props.showSavedButton.some((vidDta) => vidDta.id.videoId === props.video)
    ) {
      show = false;
    }
  }

  return (
    <Card id={props.video} playVideo={props.clicked}>
      <img alt="video thumbnail" src={props.thumbnail} />
      <span>{props.title}</span>

      {show ? (
        <button
          className="Save"
          type="button"
          onClick={(e) => {
            props.save(props.videoData);
            e.stopPropagation();
          }}
        >
          Save
        </button>
      ) : null}
    </Card>
  );
};

export default Result;
