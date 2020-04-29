import { profileAPI } from "./api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
  ],
  profile: null,
  status: '',
}

let id = 3;

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: 
      return {
        ...state,
        posts: [...state.posts, {id: ++id, message: action.newText, likesCount: 10}],
      }

    case SET_USER_PROFILE: 
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS: 
      return {
        ...state,
        status: action.status
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }

    default: 
      return state;
  }
}

export const deletePost = postId => ({type: DELETE_POST, postId})
export const addPost = (newText) => ({ type: ADD_POST, newText })
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text }) 
export const setStatus = status => ({ type: SET_STATUS, status })
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile =  userId => async dispatch => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data));
}

export const getStatus = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const updateProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileAPI.updateProfileInfo(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    let field = response.data.messages[0];
    field = field.split('->')[1].slice(0, -1).toLowerCase()
    dispatch(stopSubmit("editProfile",{"contacts": {[field]: 'Invalid Format'}}))
    return Promise.reject()  
  }
}

export const saveProfilePhoto = (photoFile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileAPI.saveProfilePhoto(photoFile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  }
}
export default profileReducer
