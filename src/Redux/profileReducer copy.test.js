import profileReducer, { addPost, deletePost } from "./profileReducer"

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
  ],
}


it('length of posts should be 5', () => {
  let action = addPost('Hello My Friends')
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3);
})

it('posts[2].message should be "Hello My Friends"', () => {
  let action = addPost('Hello My Friends')
  let newState = profileReducer(state, action)
  expect(newState.posts[2].message).toBe('Hello My Friends');
}) 

it('aftet deleting length of messages should be decrement', () => {
  let action = deletePost(1)
    let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(1);
}) 

it('should be 2', () => {
  let action = deletePost(1000)
    let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2);
}) 

