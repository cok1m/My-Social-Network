import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormElement } from '../FormsControl/FormsControl'
import { required, maxLength } from '../../utilities/validators'
import { Redirect } from 'react-router-dom'
import styles from '../FormsControl/FormsControl.module.css'

const Input = FormElement('input')
const maxLength30 = maxLength(30)

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} >
        <div>
          <Field placeholder={"Email"} name={"email"} component={Input} 
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field type="password" placeholder={"Password"} name={"password"} component={Input} 
            validate={[required]}
          />
        </div>
        <div>
          <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
        </div>
        {error && <div className={styles.formSummaryError}>
          {error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login, isAuth}) => {
  const onSubmit = (formData) => {
    let {email, password, rememberMe} = formData
    login(email, password, rememberMe)
  }

  if (isAuth) {
    return <Redirect to="/profile" />
  } else  {
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    )
  }

}

export default Login
