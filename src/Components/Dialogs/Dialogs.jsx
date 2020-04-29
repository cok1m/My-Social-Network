import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = ({ dialogs, messages, sendMessage }) => {
  let addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  let dialogsElements = dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
  });

  let messagesElements = messages.map((message) => {
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
