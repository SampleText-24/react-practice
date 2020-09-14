import React from "react";
import { connect } from "react-redux";
import {
  follow,
  requestUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/Preloader/Loader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
    // как это было до санок
    /* if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
    } else {
      this.props.toggleIsFetching(false);
    }
    if (this.props.users.length === 0) {
      usersAPI
        .requestUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }*/
  }

  onPageChanged = (pageNumber) => {
    let { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
    this.props.setCurrentPage(pageNumber);
    // как это было до санок
    /*this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.requestUsers(pageNumber, this.props.pageSize).then((data) => {
      debugger;
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });*/
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
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
    toggleFollowingProgress,
    getUsers: requestUsers,
  })
  //withAuthRedirect
)(UsersAPIComponent);

/*
let AuthRedirectComponent = withAuthRedirect(UsersAPIComponent);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
})(AuthRedirectComponent);*/
