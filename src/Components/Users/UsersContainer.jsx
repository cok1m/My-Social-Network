import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  setCurrentPage,
  setTotalItemsCount,
  toggleFollowingProgress,
  requestUsers,
  follow,
  unfollow,
} from "../../Redux/usersReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalItemsCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../Redux/UsersSelectors";

class UsersContainer extends React.Component {
  componentDidMount = () => {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  };

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalItemsCount={this.props.totalItemsCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        isFetching={this.props.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount: setTotalItemsCount,
    toggleFollowingProgress,
    getUsers: requestUsers,
  }),
  withAuthRedirect
)(UsersContainer);
