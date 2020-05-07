import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class Auth extends Component {
  loginHandler = () => {
    this.props.onLogin();
  };

  render() {
    return (
      <button type="button" onClick={this.loginHandler}>
        Login with Google
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(actions.googleSignIn()),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
