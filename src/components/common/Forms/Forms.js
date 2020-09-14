import React from "react";
import c from "./Forms.module.css";
import { required } from "../../../utils/validators/validators";
import { Field } from "redux-form";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={c.formControl + " " + (hasError ? c.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export const createField = (
  placeholder,
  name,
  component,
  type,
  validators,
  text = "",
  props = {}
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      type={type}
      validate={validators}
      {...props}
    />
    {text}
  </div>
);
