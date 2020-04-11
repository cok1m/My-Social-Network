import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img alt='111' src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
      </div>
      <div>
        Avatar + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;