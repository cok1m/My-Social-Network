import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl:
          "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png",
        name: "Dmitry K.",
        location: {
          country: "Qazaqstan",
          city: "Almaty",
        },
        status: "I'm looking for a Job right now",
        isFollow: true,
      },
  
      {
        id: 2,
        avatarUrl: "https://sibsvaya-nk.ru/wp-content/uploads/2018/08/baba.png",
        name: "Svetlana D.",
        location: {
          country: "Qazaqstan",
          city: "Astana",
        },
        status: "I am so pretty",
        isFollow: false,
      },
  
      {
        id: 3,
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF&usqp=CAU",
        name: "Sergei S.",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
        status: "I like football",
        isFollow: false,
      },
  
      {
        id: 4,
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU",
        name: "Andrew T.",
        location: {
          country: "United States",
          city: "Philadelphia",
        },
        status: "I'm free to help you to create good Video Production",
        isFollow: true,
      },
    ]);
  }


  return (
    <div className={styles.users}>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.userProfile}>
            <div className={styles.avatar}>
              <div>
                <img src={user.avatarUrl} alt="" />
              </div>
              <div>
                {user.isFollow ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.description}>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
