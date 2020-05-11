import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';

import * as actions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onSignUp();
  }

  render() {
    return (
      <div className="App">
        {!this.props.isAuthenticated ? <Auth /> : <Home />}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
