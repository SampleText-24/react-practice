import c from "./Messages.module.css";
import React from "react";

const Message = (props) => {
  return <div className={c.message}>{props.message}</div>;
};

export default Message;
