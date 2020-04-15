import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import sidebarReducer from "./sidebarReducer";

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
  
    sidebarPage: {
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
  
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'}
      ],

      newMessageBody: ""
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)
    
    this._callSubscriber(this._state)
  }
}

window.store = store;
export default store;

