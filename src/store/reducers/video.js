import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../modules/updateObject';
import { firebaseConfig } from '../../modules/firebaseConfig';

const initialState = {
  apiKey: firebaseConfig.apiKey,
  searchResults: null,
  error: null,
  videoId: null,
  query: null,
  nextPage: null,
  prevPage: null,
  resultsPerPage: null,
  savedVideos: [],
};

const searchStart = (state) => {
  return updateObject(state, { searchResults: null, error: null, query: null });
};

const searchFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const searchSuccess = (state, action) => {
  return updateObject(state, {
    searchResults: action.videosResults,
    query: action.query,
    resultsPerPage: action.resultsPerPage,
  });
};

const playVideo = (state, action) => {
  return updateObject(state, { videoId: action.videoID });
};

const saveVideo = (state, action) => {
  return updateObject(state, {
    savedVideos: state.savedVideos.concat(action.video),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return searchStart(state);
    case actionTypes.SEARCH_FAIL:
      return searchFail(state, action);
    case actionTypes.SEARCH_SUCCESS:
      return searchSuccess(state, action);
    case actionTypes.PLAY_VIDEO:
      return playVideo(state, action);
    case actionTypes.SAVE_VIDEO:
      return saveVideo(state, action);
    default:
      return state;
  }
};

export default reducer;
