import firebase from 'firebase';
import firebaseConfig from '../../modules/firebaseConfig';

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

export const authSuccess = (name, accessTk) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    name,
    accessTk,
  };
};

export const googleSignIn = () => {
  return (dispatch) => {
    dispatch(authStart());
    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch(
          authSuccess(
            res.additionalUserInfo.profile.name,
            res.credential.accessToken
          )
        );
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
