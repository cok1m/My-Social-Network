let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
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

    dialogs: [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sasha'},
      {id: 4, name: 'Victor'},
      {id: 5, name: 'Valera'}
    ]
  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 10
  }
  state.profilePage.posts.push(newPost);
}

export default state;
