import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={c.posts}>
        <Post message='Hi, how are you?' likecount={15} />
        <Post message="It's my first post" likecount="1" />
      </div>
    </div>
  )
}

export default MyPosts;