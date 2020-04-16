import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../Redux/store';

const Profile = (props) => {
  let profileInfosElements = store.getState().profilePage.profileInfos
  .filter(info => info.id === 1)
  .map(info => {
    return (
      <ProfileInfo
        key={info.id}
        id={info.id}
        name={info.name}
        age={info.age}
        city={info.city}
        birth={info.birth}
        avatar={info.avatar}
      />
    )
  })

  return (
    <div className>
      {profileInfosElements}
      <MyPostsContainer />
    </div>
  )
}

export default Profile;