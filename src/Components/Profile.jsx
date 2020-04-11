import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img alt='111' src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        My Posts
        <div className={c.posts}>
          New post
        </div>
      </div>
      <div className={c.item}>
        Post1
      </div>
      <div className={c.item}>
        post2
      </div>
    </div>
  )
}

export default Profile;