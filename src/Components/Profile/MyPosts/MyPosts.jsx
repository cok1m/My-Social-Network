import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (event) => {
    props.updateNewPostText(event.target.value);
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
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={styles.posts} >
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;