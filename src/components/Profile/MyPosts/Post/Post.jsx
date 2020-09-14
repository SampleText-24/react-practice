import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <img
        src="https://e-cdns-images.dzcdn.net/images/artist/84ff06f377b881b355e0959f750f5a1b/500x500.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likes}
      </div>
    </div>
  );
};

export default Post;
