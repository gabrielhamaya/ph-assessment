import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../modules/updateObject';

const initialState = {
  user: null,
  error: null,
};

const authStart = (state) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    user: action.user,
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, user: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
