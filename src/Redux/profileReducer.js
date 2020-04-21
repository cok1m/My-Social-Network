import { profileAPI } from "./api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
  ],
  profile: null,
  status: ''
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
    default: 
      return state;
  }
}

export const addPost = (newText) => ({ type: ADD_POST, newText })
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text }) 
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 7291
    }  
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      }
    )
  }
}

export const getStatus = (userId) => dispatch => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    })
}

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export default profileReducer
