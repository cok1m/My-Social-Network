const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
  ],
  profileInfos: [
    {id:1, name: "Konstantin Kim", age: 27, city: 'Almaty', birth: "09.20.1992", avatar: "https://cdn.pixabay.com/photo/2013/07/13/10/08/pig-156610__340.png"},
    {id:2, name: "Ivan Petrov", age: 30, city: "Astata", birth: "10.10.1989"}
  ],
  newPostText: '',
}

let id = 3;

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: 
      return {
        ...state,
        posts: [...state.posts, {id: ++id, message: state.newPostText, likesCount: 10}],
        newPostText: ""
      }

    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText
      }

    default: 
      return state;
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer
