import { authAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "You remind me of my bimmer", likes: "❤ 240" },
    {
      id: 2,
      message: "A lot of trunk space, the perfect two seater",
      likes: "❤ 124",
    },
    {
      id: 3,
      message: "You got a lot of drive I'm trying to keep up",
      likes: "❤ 420",
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostElement,
        likes: "❤ 0",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostElement: "",
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postID),
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostElement) => ({
  type: ADD_POST,
  newPostElement,
});

export const deletePostActionCreator = (postID) => ({
  type: DELETE_POST,
  postID,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

// санки ниже
export const getProfile = (userID) => {
  return (dispatch) => {
    profileAPI
      .getProfile(userID)
      .then((response) => dispatch(setUserProfile(response.data)));
  };
};

export const getStatus = (userID) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userID);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userID = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userID));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
