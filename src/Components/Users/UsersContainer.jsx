import { connect } from 'react-redux';
import React from 'react'
import Axios from 'axios'
import Users from './Users';
import {
  follow,
  unfollow,
  setUsers,
  unmountUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../Redux/usersReducer';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidUpdate = () => {
    console.log('DidUpdate');
  };

  componentDidMount = () => {
    console.log('DidMount');
    this.props.toggleIsFetching(true)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.toggleIsFetching(false)
      console.log(response.data.totalCount);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)

    });
  };

  componentWillUnmount = () => {
    console.log('unmountUsers');
    this.props.unmountUsers();
  };

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then((response) => {
      console.log(response.data.totalCount);
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <Users users={this.props.users}
       pageSize={this.props.pageSize}
       totalUsersCount={this.props.totalUsersCount}
       currentPage={this.props.currentPage}
       onPageChanged={this.onPageChanged}
       follow={this.props.follow}
       unfollow={this.props.unfollow}
       isFetching={this.props.isFetching}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  unmountUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
