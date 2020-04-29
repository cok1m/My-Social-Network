import { authAPI, securityAPI } from "./api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS' 
const SET_IS_LOGGING = 'auth/SET_IS_LOGGING'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
  isLogging: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.payload
      }

    case SET_IS_LOGGING:
      return {
        ...state,
        isLogging: action.payload
      }
    default:
      return state;
  }
}

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: captchaUrl
})

const setIsLogging = (isLogging) => ({
  type: SET_IS_LOGGING, payload: isLogging
})

export const setAuthUserData = (userId, email, login, isAuth) => 
  ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}})


export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.authMe();
  
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
} 


export const login = (email, password, rememberMe, captcha = null) => async dispatch => {
  dispatch(setIsLogging(true))
  const response = await authAPI.login(email, password, rememberMe, captcha)
  dispatch(setIsLogging(false))
  if (response.data.resultCode === 0) {
    // success, get auth data
      dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
    dispatch(stopSubmit("login", {_error: message}))
  }
} 

export const logout = () => async dispatch => {
  dispatch(setIsLogging(true))
  const response = await authAPI.logout()
  dispatch(setIsLogging(false))
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer