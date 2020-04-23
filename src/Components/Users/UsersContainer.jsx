import { connect } from 'react-redux';
import React from 'react'
import Users from './Users';
import {
  setCurrentPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  requestUsers,
  follow,
  unfollow
} from '../../Redux/usersReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/UsersSelectors';
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount = () => {
    console.log('DidMount');
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  onPageChanged = pageNumber => {
    console.log('onPageChanged')
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    console.log('render')
    return (
      <Users 
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        isFetching={this.props.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    )
  }
}


let mapStateToProps = (state) => {
  console.log('MapStateToProps')
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers: requestUsers,
  }),
  withAuthRedirect
)(UsersContainer)