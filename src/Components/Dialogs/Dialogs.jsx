import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (event) => {
    props.updateNewMessageBody(event.target.value);
  }

  let dialogsElements = props.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  })
  
  let messagesElements = props.messages.map(message => {
    return <Message message={message.message} key={message.id} />
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
              autoFocus={true}
              onChange={onNewMessageChange}
              value={props.newMessageBody}
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