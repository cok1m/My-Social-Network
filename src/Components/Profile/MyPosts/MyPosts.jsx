import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../../utilities/validators"
import { FormElement } from "../../FormsControl/FormsControl";

let Textarea = FormElement('textarea')
export const maxLength15 = maxLength(15)

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostBody);
  };


  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder="Post message"
          name={"newPostBody"}     
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts;
