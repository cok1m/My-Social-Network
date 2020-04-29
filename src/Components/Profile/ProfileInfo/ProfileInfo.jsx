import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar from "../../../assets/avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = ({ profile, isOwner, status, updateStatus, updateProfile, saveProfilePhoto}) => {
  const [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    updateProfile(formData)
      .then(() => {
      setEditMode(false)
      })
  }

  const onMainPhotoSeleceted = (event) => {
    if (event.target.files.length) {
      saveProfilePhoto(event.target.files[0])
    }
  }

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <div className={styles.mainPhoto}>
          <img alt="" src={profile.photos.large || Avatar} />
          {isOwner && <input type="file" onChange={onMainPhotoSeleceted} />}
        </div>
        <div className={styles.profileInfo}>
          {editMode             
            ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile} setEditMode={() => setEditMode(false)}/> 
            : <ProfileData updateStatus={updateStatus} status={status} profile={profile} isOwner={isOwner} enableEditMode={() => setEditMode(true)} /> 
          }
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, status, updateStatus, enableEditMode}) => {
  return (
    <div>
      <div>
        <b>Full Name</b>: {profile.fullName}
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My Profession skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About Me</b>: {profile.aboutMe}
      </div>
      <div className={styles.contacts}>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      {isOwner && <button onClick={enableEditMode}>edit</button>}
    </div>
  );
};



const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
