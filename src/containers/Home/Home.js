import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../../components/TimeWidget/TimeWidget';
import Search from '../Search/Seach';
import Results from '../../components/Results/Results';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <TimeWidget />
        <Search />
        {this.props.searchResults ? (
          <Results resultsOf={this.props.videoResults} />
        ) : null}
        <h1>Saved videos</h1>
        {this.props.savedVideos ? (
          <Results resultsOf={this.props.savedVideos} />
        ) : (
          <p>No saved videos</p>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.vid.searchResults,
    videoResults: state.vid.searchResults,
    savedVideos: state.vid.savedVideos,
  };
};

export default connect(mapStateToProps)(Home);
