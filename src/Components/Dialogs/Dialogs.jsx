import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { addDialogMessageActionCreator, updateNewDialogMessageActionCreator } from '../../Redux/state';

const Dialogs = (props) => {

  let addDialogMessage = () => {
    props.dispatch(addDialogMessageActionCreator())
  }

  let onDialogMessageChange = (event) => {
    props.dispatch(updateNewDialogMessageActionCreator(event.target.value))
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
        {messagesElements}
        <textarea 
          onChange={onDialogMessageChange}
          value={props.dialogsPage.newDialogMessage}
          placeholder="Введите текст"
        />
        <button onClick={addDialogMessage}>BUTTON</button>
      </div>  
    </div>
  )
}

export default Dialogs