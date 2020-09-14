import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/Forms/Forms";

const MyPosts = (props) => {
  let postsElement = [...props.posts]
    .reverse()
    .map((p) => <Post message={p.message} key={p.id} likes={p.likes} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostElement);
  };

  return (
    <div className={c.post_block}>
      <h3>My post</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div>new post</div>
      {postsElement}
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostElement"}
          component={Textarea}
          placeholder={"Your text here"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);

export default MyPosts;
