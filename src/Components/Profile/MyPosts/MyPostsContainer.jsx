import { addPost, deletePost } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  deletePost
})(MyPosts)

export default MyPostsContainer;