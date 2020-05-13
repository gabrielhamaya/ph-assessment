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

export const searchSuccess = (searchData, query) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    searchData,
    query,
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
          maxResults: 5,
        },
      })
      .then((res) => dispatch(searchSuccess(res.data, query), console.log(res)))
      .catch((err) => dispatch(searchFail(err), console.log(err)));
  };
};

export const loadMoreSuccess = (moreVideos) => {
  return {
    type: actionTypes.LOAD_MORE_SUCCESS,
    moreVideos,
  };
};

export const loadMoreFail = (error) => {
  return {
    type: actionTypes.LOAD_MORE_FAIL,
    error,
  };
};

export const loadMore = (query, apiKey, nextPageTkn) => {
  return (dispatch) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          key: apiKey,
          type: 'video',
          maxResults: 5,
          pageToken: nextPageTkn,
        },
      })
      .then((res) =>
        dispatch(loadMoreSuccess(res.data, query), console.log(res))
      )
      .catch((err) => dispatch(loadMoreFail(err), console.log(err)));
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
