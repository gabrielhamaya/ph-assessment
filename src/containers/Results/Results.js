import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result/Result';

import * as actions from '../../store/actions/index';

/*  
  In here we call the actions and pass it on individual videos so that we can either save them, play them or delete them
*/

class Results extends Component {
  render() {
    return this.props.resultsOf.map((video) => {
      return (
        <Result
          thumbnail={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          key={video.id.videoId}
          video={video.id.videoId}
          clicked={this.props.onPlay}
          save={this.props.onSave}
          delete={this.props.onDelete}
          videoData={video}
          showSavedButton={this.props.showSaved}
          showDeleteButton={this.props.deleteButton}
        />
      );
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: (videoId) => dispatch(actions.playVideo(videoId)),
    onSave: (video) => dispatch(actions.saveVideo(video)),
    onDelete: (video) => dispatch(actions.deleteVideo(video)),
  };
};

export default connect(null, mapDispatchToProps)(Results);
