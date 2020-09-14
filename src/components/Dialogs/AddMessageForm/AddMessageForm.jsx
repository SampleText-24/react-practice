import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/Forms/Forms";
import React from "react";

const maxLength40 = maxLengthCreator(40);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newMessageBody"}
          component={Textarea}
          placeholder={"Enter your message"}
          validate={[required, maxLength40]}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

export const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);
