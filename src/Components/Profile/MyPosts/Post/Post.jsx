import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7gWgbjQAFX_eF1tCmcevXjx2XthnmQGTe8tqKTVMhkK-fBabx&usqp=CAU" />
      {props.message}
      <div>
        <span>
          likes: {props.likesCount}
          </span>
      </div>
    </div>
  )
}

export default Post;