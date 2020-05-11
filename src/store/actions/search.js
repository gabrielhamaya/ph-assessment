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

export const searchSuccess = (videosResults, query, resultsPerPage) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    videosResults,
    query,
    resultsPerPage,
  };
};

export const seachVideo = (apiKey, query) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          key: apiKey,
          type: 'video',
          pageToken: undefined,
          prevPageToken: undefined,
          maxResults: 10,
        },
      })
      .then((res) =>
        dispatch(
          searchSuccess(res.data.items, query, res.data.pageInfo),
          console.log(res)
        )
      )
      .catch((err) => dispatch(searchFail(err)));
  };
};

export const nextPage = () => {};

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
