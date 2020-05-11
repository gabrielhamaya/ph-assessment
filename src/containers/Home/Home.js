import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../../components/TimeWidget/TimeWidget';
import Search from '../Search/Seach';
import Results from '../../components/Results/Results';
import Video from '../../components/Video/Video';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <TimeWidget className="Time" />
        <Search />
        <Video />
        {this.props.searchResults ? (
          <Results resultsOf={this.props.searchResults.items} showSaved />
        ) : null}
        <h1>Saved videos</h1>
        <Results resultsOf={this.props.savedVideos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.vid.searchData,
    savedVideos: state.vid.savedVideos,
  };
};

export default connect(mapStateToProps)(Home);
