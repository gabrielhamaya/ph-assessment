import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  render() {
    return (
      <iframe
        title="1"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${this.props.video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.vid.videoId,
  };
};

export default connect(mapStateToProps)(Video);
