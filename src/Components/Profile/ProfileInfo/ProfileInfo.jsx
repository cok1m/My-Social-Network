import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import Avatar from '../../../assets/avatar.png'
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img alt='' src={props.profile.photos.large || Avatar} />
        <div>
          <p>Name: <strong>{props.profile.fullName}</strong></p>
          <ProfileStatus 
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <p>Looking for a job: <strong>{props.profile.lookingForAJobDescription}</strong></p>
          <p>About Me: <strong>{props.profile.aboutMe}</strong></p>
          <div className={styles.contacts}>
            <h3>Contacts:</h3>
            <p>Facebook: <strong>{props.profile.contacts.facebook}</strong></p>
            <p>Website: <strong>{props.profile.contacts.website}</strong></p>
            <p>VK: <strong>{props.profile.contacts.vk}</strong></p>
            <p>Twitter: <strong>{props.profile.contacts.twitter}</strong> </p>
            <p>Instagram: <strong>{props.profile.contacts.instagram}</strong> </p>
            <p>Youtube: <strong>{props.profile.contacts.youtube}</strong> </p>
            <p>Github: <strong>{props.profile.contacts.github}</strong> </p>
            <p>mainLink: <strong>{props.profile.contacts.mainLink}</strong> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo