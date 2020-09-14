import React from "react";
import c from "./ProfileInfo.module.css";
import Loader from "../../common/Preloader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Loader />;
  }

  return (
    <div>
      {/* <img
        src="https://centralsauce.com/wp-content/uploads/2018/09/flowerboy_visual1-1024x576.jpg"
        alt=""
      />*/}
      <div>
        <div className={c.ava}>
          <img src={profile.photos.large} alt="" />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div className={c.text}>{profile.aboutMe}</div>
        <div className={c.text}>{profile.fullName}</div>
        <div className={c.text}>{profile.contacts.vk}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
