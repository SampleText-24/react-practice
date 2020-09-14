import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  //let stateWithSetState = useState(false);
  //let editMode = stateWithSetState[0];
  //let setEditMode = stateWithSetState[1];

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <b>Status:</b>{" "}
          <span onDoubleClick={activateEditMode}>
            {props.status || "Your status can be here!"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
