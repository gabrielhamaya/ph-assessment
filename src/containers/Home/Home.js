import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../../components/TimeWidget/TimeWidget';
import Search from '../Search/Seach';
import Results from '../Results/Results';
import Video from '../../components/Video/Video';
import * as actions from '../../store/actions/index';
import './Home.css';

class Home extends Component {
  loadMoreHandler = () => {
    this.props.onLoadMore(
      this.props.searchParams.query,
      this.props.searchParams.apiKey,
      this.props.searchResults.nextPageToken
    );
  };

  render() {
    const showVid = this.props.activeVid ? (
      <Video />
    ) : (
      <h1>Look for a video!</h1>
    );

    /* If you made search then show this */
    /* on <Results> I add the resultOf to pick the data I want to show on the while showSaved let's us know if the video was already saved  */
    const showSearchResults = this.props.searchResults ? (
      <div>
        <Results
          resultsOf={this.props.searchResults.items}
          showSaved={this.props.savedVideos}
        />
        <button type="button" className="btn" onClick={this.loadMoreHandler}>
          Load More
        </button>
      </div>
    ) : null;

    /* If there are saved videos then show this */
    /* on <Results> I add the resultOf to pick the data I want to show on the while showSaved let's us know if the video was already saved, deleteButton is used as a boolean to display a delete option  */
    const showSavedVideos = this.props.savedVideos.length ? (
      <div>
        <h1>Saved videos</h1>
        <Results
          resultsOf={this.props.savedVideos}
          showSaved={this.props.savedVideos}
          deleteButton
        />
      </div>
    ) : null;

    return (
      <div className="Home">
        <h1>Home</h1>
        <TimeWidget />
        <Search />
        {showVid}
        <div className="video-container">
          {showSearchResults}
          {showSavedVideos}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeVid: state.vid.videoId,
    searchResults: state.vid.searchData,
    searchParams: state.vid,
    savedVideos: state.vid.savedVideos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadMore: (query, apiKey, nextPageTkn) =>
      dispatch(actions.loadMore(query, apiKey, nextPageTkn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
