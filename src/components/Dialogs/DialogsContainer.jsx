import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.DialogsPage.dialogs,
    messages: state.DialogsPage.messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
*/
