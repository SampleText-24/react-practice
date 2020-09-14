import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import { AddMessageReduxForm } from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messageElement = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>{dialogsElement}</div>
      <div className={c.messages}>{messageElement}</div>
      <div className={c.messages}>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
