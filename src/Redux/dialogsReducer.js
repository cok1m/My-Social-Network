const SEND_MESSAGE = 'ADD-DIALOG-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = {
        id: 6,
        message: state.newMessageBody
      }
      state.messages.push(message);
      state.newMessageBody = "";
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

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