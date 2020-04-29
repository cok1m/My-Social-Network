import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

let Users = ({ isFetching, users, followingInProgress,
  unfollow, follow,
  totalItemsCount, pageSize, onPageChanged, currentPage
  }) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      <div>
        {isFetching && <Preloader />}
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              followingInProgress={followingInProgress}
              unfollow={unfollow}
              follow={follow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
