import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import Avatar from '../../../assets/avatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  let contacts = profile.contacts
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img alt='' src={profile.photos.large || Avatar} />
        <div>
          <p>Name: <strong>{profile.fullName}</strong></p>
          <ProfileStatusWithHooks 
            status={status}
            updateStatus={updateStatus}
          />
          <p>Looking for a job: <strong>{profile.lookingForAJobDescription}</strong></p>
          <p>About Me: <strong>{profile.aboutMe}</strong></p>
          <div className={styles.contacts}>
            <h3>Contacts:</h3>
            <p>Facebook: <strong>{contacts.facebook}</strong></p>
            <p>Website: <strong>{contacts.website}</strong></p>
            <p>VK: <strong>{contacts.vk}</strong></p>
            <p>Twitter: <strong>{contacts.twitter}</strong> </p>
            <p>Instagram: <strong>{contacts.instagram}</strong> </p>
            <p>Youtube: <strong>{contacts.youtube}</strong> </p>
            <p>Github: <strong>{contacts.github}</strong> </p>
            <p>mainLink: <strong>{contacts.mainLink}</strong> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo