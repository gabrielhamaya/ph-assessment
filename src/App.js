import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';

class App extends Component {
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
    isAuthenticated: state.auth.LoggedIn,
  };
};

export default connect(mapStateToProps)(App);
