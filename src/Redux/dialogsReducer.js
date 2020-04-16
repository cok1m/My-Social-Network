const SEND_MESSAGE = 'ADD-DIALOG-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
  messages: [
    {id: 1,message: 'Hi'},
    {id: 2,message: 'How are you?'},
    {id: 3,message: 'Yo'},
    {id: 4,message: 'Yo'},
    {id: 5,message: 'Yo'},
    {id: 6,message: 'How are you?'},
    {id: 7,message: 'How are you?'},
    {id: 8,message: 'What\' your name?'},
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
let id = 9;

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
       return {
        ...state,
        messages: [...state.messages, {id: ++id, message: state.newMessageBody}],
        newMessageBody: ""
      }

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body        
      }

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ 
  type: SEND_MESSAGE 
})

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export default dialogsReducer
