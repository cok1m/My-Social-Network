import Users from './Users'
import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../Redux/usersReducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId))
    },

    unfollow: userId => {
      dispatch(unfollowActionCreator(userId))
    },
    // toggleFollow: userId => {
    //   dispatch({type: 'TOGGLE_FOLLOW', userId})
    // },

    setUsers: users => {
      dispatch(setUsersActionCreator(users))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)