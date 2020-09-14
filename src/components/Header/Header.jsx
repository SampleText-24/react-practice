import React from "react";
import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={c.header}>
      <img
        src="https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main.png"
        alt=""
      />
      <div className={c.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"} activeClassName={c.activeLink}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
