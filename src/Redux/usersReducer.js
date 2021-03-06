import { usersAPI } from "./api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const UNMOUNT_USERS = 'UNMOUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 50,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return { 
        ...state, 
        users: state.users.map(user => {
          return user.id === action.userId ? {...user, followed: true } : user
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userId ? {...user, followed: false } : user
        })
      }
      
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case UNMOUNT_USERS:
      return {
        ...state,
        users: []
      }

    case SET_CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.currentPage,
        users: []
      }

    case SET_TOTAL_ITEMS_COUNT: 
      return {
        ...state,
        totalItemsCount: action.totalItemsCount
      }

    case TOGGLE_IS_FETCHING: 
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS: 
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}


export const followSuccess = (userId) => ({ type: FOLLOW, userId })

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = users => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalItemsCount = totalItemsCount => ({type: SET_TOTAL_ITEMS_COUNT, totalItemsCount })

export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const requestUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const data = await usersAPI.getUsers(page, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items));
  dispatch(setTotalItemsCount(data.totalCount))
}

export const follow = userId => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await usersAPI.follow(userId)
    
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId)) 
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = userId => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await usersAPI.unfollow(userId)

    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export default usersReducer