import React from "react";
import c from "./Users.module.css";
import userPhoto from "../../assets/images/c01278219b37218b4e0d49713ae21b70.jpg";
import { NavLink } from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
//prettier-ignore

const User = ({user, followingInProgress, unfollow, follow}) => {

  return (
        <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={c.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed
                ? (<button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {unfollow(user.id)}}>unfollow</button>)
                : (<button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {follow(user.id)}}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
           {/* <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>*/}
          </span>
        </div>
  )

};

export default User;
