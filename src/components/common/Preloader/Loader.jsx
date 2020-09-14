import React from "react";
import c from "./Loader.module.css";

let Loader = () => {
  return <div className={c.lds_hourglass}></div>;
};

export default Loader;
