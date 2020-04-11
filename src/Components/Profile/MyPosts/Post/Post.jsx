import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  let likeOrLikes = () => {
    if (props.likecount < 2) {
      return "like"
    } else {
      return 'likes'
    }
  }

  return (
    <div className={c.item}>
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7gWgbjQAFX_eF1tCmcevXjx2XthnmQGTe8tqKTVMhkK-fBabx&usqp=CAU" />
      {props.message}
      <div>
        <span>
          {likeOrLikes()}: {props.likecount}
          </span>
      </div>
    </div>
  )
}

export default Post;