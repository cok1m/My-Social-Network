import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let profileInfosElements = props.profilePage.profileInfos
  .filter(info => info.id === 1)
  .map(info => {
    return (
      <ProfileInfo
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
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost} 
               newPostText={props.profilePage.newPostText} 
               updateNewPostText={props.updateNewPostText}         
      />
    </div>
  )
}

export default Profile;