import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {
    props.dispatch(updateNewPostTextActionCreator(event.target.value));
  }
  
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea 
                    placeholder="Введите текст" 
                    onChange={onPostChange} 
                    value={props.newPostText} 
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={styles.posts} >
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;