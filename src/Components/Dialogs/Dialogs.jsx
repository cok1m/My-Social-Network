import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

  let addDialogMessage = () => {
    props.addDialogMessage()
  }

  let onDialogMessageChange = (event) => {
    props.updateNewDialogMessage(event.target.value)
  }

  let dialogsElements = props.state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })
  
  let messagesElements = props.state.messages.map(message => {
    return <Message message={message.message} />
  })

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <textarea 
          onChange={onDialogMessageChange}
          value={props.state.newDialogMessage}
          placeholder="Введите текст"
        />
        <button onClick={addDialogMessage}>BUTTON</button>
      </div>  
    </div>
  )
}

export default Dialogs