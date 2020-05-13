/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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

export const saveVideoFail = (error) => {
  return {
    type: actionTypes.SAVE_VIDEO_FAIL,
    error,
  };
};

export const saveVideoSucess = (video) => {
  return {
    type: actionTypes.SAVE_VIDEO_SUCCESS,
    video,
  };
};

export const fetchSavedVideosSuccess = (SavedVideos) => {
  return {
    type: actionTypes.FETCH_SAVED_VIDEO_SUCCESS,
    SavedVideos,
  };
};

export const fetchSavedVideosFail = (error) => {
  return {
    type: actionTypes.FETCH_SAVED_VIDEO_FAIL,
    error,
  };
};

export const fetchSavedVideos = () => {
  return (dispatch) => {
    axios
      .get('https://ph-assessment-backend.firebaseio.com/savedVideos.json')
      .then((res) => {
        const fetchedVideos = [];
        // eslint-disable-next-line prefer-const
        for (let key in res.data) {
          fetchedVideos.push({
            ...res.data[key],
          });
        }
        dispatch(fetchSavedVideosSuccess(fetchedVideos));
      })
      .catch((err) => {
        dispatch(fetchSavedVideosFail(err));
      });
  };
};

export const saveVideo = (video) => {
  return (dispatch) => {
    axios
      .put(
        `https://ph-assessment-backend.firebaseio.com/savedVideos/${video.id.videoId}.json`,
        video
      )
      .then(() => {
        dispatch(saveVideoSucess(video));
      })
      .catch((error) => {
        dispatch(saveVideoFail(error));
      });
  };
};

export const deleteVideo = (video) => {
  return (dispatch) => {
    axios
      .delete(
        `https://ph-assessment-backend.firebaseio.com/savedVideos/${video.id.videoId}.json`
      )
      .then(() => {
        dispatch(fetchSavedVideos());
      });
  };
};
