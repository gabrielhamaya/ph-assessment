import React from 'react';
import './Result.css';
import Card from '../../../components/UI/Card';

/* 
  From the props we pass on <Results> we 
*/

const Result = (props) => {
  /* We compare if the video was already saved and decide if we show the button or not */
  let showSavedBtn = true;
  if (props.showSavedButton) {
    if (
      props.showSavedButton.some((vidDta) => vidDta.id.videoId === props.video)
    ) {
      showSavedBtn = false;
    }
  }

  return (
    <Card id={props.video} playVideo={props.clicked}>
      <img alt="video thumbnail" src={props.thumbnail} />
      <span>{props.title}</span>

      {showSavedBtn ? (
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

      {props.showDeleteButton ? (
        <button
          className="Save"
          type="button"
          onClick={(e) => {
            props.delete(props.videoData);
            e.stopPropagation();
          }}
        >
          Delete
        </button>
      ) : null}
    </Card>
  );
};

export default Result;
