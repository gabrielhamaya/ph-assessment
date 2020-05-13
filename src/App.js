import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';

import * as actions from './store/actions';

class App extends Component {
  /* Check for any saved videos and if the user is singed in */
  componentDidMount() {
    this.props.onSignUp();
    this.props.onLoadSavedVideos();
  }

  render() {
    return (
      <div className="App">
        {this.props.isAuthenticated ? <Home /> : <Auth />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: () => dispatch(actions.authCheckState()),
    onLoadSavedVideos: () => dispatch(actions.fetchSavedVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
