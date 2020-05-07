import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result/Result';

import * as actions from '../../store/actions/index';

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
          videoData={video}
        />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    videoResults: state.vid.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: (videoId) => dispatch(actions.playVideo(videoId)),
    onSave: (video) => dispatch(actions.saveVideo(video)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
