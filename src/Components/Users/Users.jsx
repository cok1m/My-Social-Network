import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar.png";
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

let Users = (props) => {

  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div className={styles.pages}>
        {pages.map((page) => {
          return (
            <span
              onClick={() => { props.onPageChanged(page) }}
              className={(props.currentPage === page && styles.selectedPage) + " " + styles.currentPage }
            >
              {page + " "}
            </span>
          );
        })}
      </div>
      {props.isFetching && <Preloader /> }
      {props.users.map(user => {
        return (
          <div key={user.id} className={styles.userProfile}>
            <div className={styles.avatar}>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  alt=""
                />
                </NavLink>
              </div>
              <div>
                {user.followed 
                  ? <button 
                      disabled={props.followingInProgress.some(id => id === user.id)} 
                      onClick={() => props.unfollow(user.id)}
                    >
                      Unfollow
                    </button>
                  :
                    <button 
                      disabled={props.followingInProgress.some(id => id === user.id)} 
                      onClick={() => props.follow(user.id)} >
                        Follow
                    </button>
                }
              </div>
            </div>
            <div className={styles.description}>
              <div>{user.name}</div>
              <div>{"user.status"}</div>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
