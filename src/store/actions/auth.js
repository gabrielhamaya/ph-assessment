import firebase from 'firebase';
import { fire, provider } from '../../modules/firebaseConfig';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user,
  };
};

export const googleSignIn = () => {
  return (dispatch) => {
    dispatch(authStart());
    fire
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.user));
      })
      .catch((err) => {
        dispatch(authFail(err.message));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        dispatch(authSuccess(user));
      } else {
        dispatch(authFail(user));
      }
    });
  };
};
