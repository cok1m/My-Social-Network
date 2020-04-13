import React from 'react'
import c from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
      </div>
      <div className={c.descriptionBlock}>
        <img alt="avatar" src={props.avatar} />
        <div>
        <div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Current City: {props.city}</p>
          <p>Date of birth: {props.birth}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo