import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
/* <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={c.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? (<button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}>unfollow</button>)
                : (<button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {props.follow(u.id)}}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
           {/!* <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>*!/}
          </span>
        </div>*/
