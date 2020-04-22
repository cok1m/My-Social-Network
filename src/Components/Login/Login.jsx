import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormElement } from '../FormsControl/FormsControl'
import { required, maxLength } from '../../utilities/validators'
import { Redirect } from 'react-router-dom'
import styles from '../FormsControl/FormsControl.module.css'

const Input = FormElement('input')
const maxLength30 = maxLength(30)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
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
        {props.error && <div className={styles.formSummaryError}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    let {email, password, rememberMe} = formData
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
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
