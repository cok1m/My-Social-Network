import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  let dialogsElements = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
  });

  let messagesElements = props.messages.map((message) => {
    return <Message message={message.message} key={message.id} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};



export default Dialogs;
