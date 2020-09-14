import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/Forms/Forms";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import c from "./../common/Forms/Forms.module.css";

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField("Email", "email", Input, "null", [required])}
      {createField("Password", "password", Input, "password", [required])}
      {createField(
        "null",
        "rememberMe",
        Input,
        "checkbox",
        null,
        "Remember Me"
      )}

      {props.error && <div className={c.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
