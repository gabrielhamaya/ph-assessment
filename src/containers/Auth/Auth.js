import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Auth.css';

import * as actions from '../../store/actions/index';

class Auth extends Component {
  loginHandler = () => {
    this.props.onLogin();
  };

  render() {
    return (
      <div className="background-button-banner">
        <button className="Auth" type="button" onClick={this.loginHandler}>
          Login with Google!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(actions.googleSignIn()),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
