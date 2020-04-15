import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';

const Dialogs = (props) => {

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (event) => {
    props.dispatch(updateNewMessageBodyCreator(event.target.value))
  }

  let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })
  
  let messagesElements = props.dialogsPage.messages.map(message => {
    return <Message message={message.message} />
  })

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>          
            <textarea 
              autoFocus='true'
              onChange={onNewMessageChange}
              value={props.dialogsPage.newMessageBody}
              placeholder="Введите текст"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs