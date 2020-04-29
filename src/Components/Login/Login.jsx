import React from "react";
import { reduxForm, Field } from "redux-form";
import { FormElement } from "../FormsControl/FormsControl";
import { required, maxLength } from "../../utilities/validators";
import { Redirect } from "react-router-dom";
import styles from "./Login.module.css";

const Input = FormElement("input");
const maxLength30 = maxLength(30);

const LoginForm = ({ handleSubmit, error, captchaUrl, isLogging }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
        <span>remember me</span>
      </div>

      {captchaUrl && (
        <div>
          <img alt="captcha" src={captchaUrl} name="captcha" />
          <Field component={Input} name={"captcha"} />
        </div>
      )}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button disabled={isLogging}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = ({ login, isAuth, captchaUrl, isLogging }) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe, captcha } = formData;
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm
          isLogging={isLogging}
          onSubmit={onSubmit}
          captchaUrl={captchaUrl}
        />
      </div>
    );
  }
};

export default Login;
