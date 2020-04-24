import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./user.module.css";
import userPhoto from "../../assets/avatar.png";

const User = ({ user, followingInProgress, unfollow, follow }) => {
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
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.description}>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </div>
    </div>
  );
};

export default User;
