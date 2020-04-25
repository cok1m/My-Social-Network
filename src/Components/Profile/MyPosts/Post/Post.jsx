import React from 'react';
import styles from './Post.module.css';

const Post = ({postId, deletePost, likesCount, message}) => {
  const onDeletePost = () => {
    deletePost(postId)
  }
  return (
    <div className={styles.item}>
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7gWgbjQAFX_eF1tCmcevXjx2XthnmQGTe8tqKTVMhkK-fBabx&usqp=CAU" />
      {message}
      <div>
        <span>
          likes: {likesCount}
          </span>
      </div>
      <div><button onClick={onDeletePost}>Delete Post</button></div>
    </div>
  )
}

export default Post;