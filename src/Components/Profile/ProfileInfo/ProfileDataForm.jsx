import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../../FormsControl/FormsControl'
import { required } from '../../../utilities/validators'
import styles from "./ProfileInfo.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  let Input = FormElement('input')
  let TextArea = FormElement('textarea')

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full Name</b>: 
        <Field component={Input} name="fullName" placeholder="Full Name" validate={[required]} />
      </div>
      <div>
        <b>Looking for a job</b>: 
        <Field component={Input} name="lookingForAJob" type='checkbox' validate={[required]} />
      </div>
      <div>
        <b>My Profession skills</b>: 
        <Field placeholder="JS CSS3 HTML5" component={TextArea} name="lookingForAJobDescription" validate={[required]} />
      </div>
      <div>
        <b>About Me</b>: 
        <Field placeholder="about me" component={Input} name="aboutMe" validate={[required]} />
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={styles.contact}>
            <b>{key}</b>: <Field key={key} component={Input} name={"contacts." + key} placeholder={key} />
          </div>
        })}
      </div>
      {error && 
      <div className={styles.formSummaryError}>
          {error}
      </div>}
      <div>
        <button>save</button>
      </div>
    </form>
  )
}

const ProfileFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)



export default ProfileFormReduxForm