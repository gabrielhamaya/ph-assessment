import axios from 'axios';
import * as actionTypes from './actionTypes';

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START,
  };
};

export const searchFail = (error) => {
  return {
    type: actionTypes.SEARCH_FAIL,
    error,
  };
};

export const searchSuccess = (videosResults) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    videosResults,
  };
};

export const seachVideo = (apiKey, accessToken, query) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`,
        {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        }
      )
      .then((res) => dispatch(searchSuccess(res.data.items)))
      .catch((err) => dispatch(searchFail(err)));
  };
};

export const playVideo = (videoID) => {
  return {
    type: actionTypes.PLAY_VIDEO,
    videoID,
  };
};

export const saveVideo = (video) => {
  return {
    type: actionTypes.SAVE_VIDEO,
    video,
  };
};
