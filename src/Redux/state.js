const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE'
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE'

let store = {
   _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
      ],
      newPostText: '123',
      profileInfos: [
        {id:1, name: "Konstantin Kim", age: 27, city: 'Almaty', birth: "09.20.1992", avatar: "https://cdn.pixabay.com/photo/2013/07/13/10/08/pig-156610__340.png"},
        {id:2, name: "Ivan Petrov", age: 30, city: "Astata", birth: "10.10.1989"}
      ]
      
    },
  
    sidebar: {
      friends: [
        {name: "Andrew"},
        {name: "Sasha"},
        {name: "Oleg"}
      ]
    },
  
    navbarPage: {
      friends: [
        {name: "Andrew"},
        {name: "Sasha"},
        {name: "Oleg"}
      ]
    },
  
    dialogsPage: {
      messages: [
        {id: 1,message: 'Hi'},
        {id: 2,message: 'How are you?'},
        {id: 3,message: 'Yo'},
        {id: 4,message: 'Yo'},
        {id: 5,message: 'Yo'},
        {id: 2,message: 'How are you?'},
        {id: 2,message: 'How are you?'},
        {id: 2,message: 'What\' your name?'},
      ],
  
      newDialogMessage: "",
  
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'}
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 10
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === ADD_DIALOG_MESSAGE) {

      let message = {
        id: 6,
        message: this._state.dialogsPage.newDialogMessage
      }
      this._state.dialogsPage.messages.push(message);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newDialogMessage = "";
    } else if (action.type === UPDATE_NEW_DIALOG_MESSAGE) {

      this._state.dialogsPage.newDialogMessage = action.newText;
      this._callSubscriber(this._state);
    }

  }

}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const addDialogMessageActionCreator = () => ({ 
  type: ADD_DIALOG_MESSAGE 
})

export const updateNewDialogMessageActionCreator = (text) => ({
  type: UPDATE_NEW_DIALOG_MESSAGE,
  newText: text
})

window.store = store;
export default store;

