let rerenderEntireTree = () => {
  console.log('state is changed');
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
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

}

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 10
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newPostText = "";
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addDialogMessage = () => {
  let message = {
    id: 6,
    message: state.dialogsPage.newDialogMessage
  }
  state.dialogsPage.messages.push(message);
  rerenderEntireTree(state);
  state.dialogsPage.newDialogMessage = "";
}

export const updateNewDialogMessage = (newText) => {
  state.dialogsPage.newDialogMessage = newText;
  rerenderEntireTree(state);
}

export const subscribe = observer => {
  rerenderEntireTree = observer;
} 

export default state;
