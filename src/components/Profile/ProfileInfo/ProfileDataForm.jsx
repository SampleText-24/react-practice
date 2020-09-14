import React from "react";
import { createField, Input, Textarea } from "../../common/Forms/Forms";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name:</b> {createField("Full name", "fullName", Input)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", Input, "checkbox")}
      </div>

      <div>
        <b>My professional skills:</b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          Textarea
        )}
      </div>

      <div>
        <b>About me:</b> {createField("About me", "aboutMe", Textarea)}
      </div>
      {/*<div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>*/}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
