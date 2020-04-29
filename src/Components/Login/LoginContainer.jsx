import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import Login from "./Login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
  isLogging: state.auth.isLogging,
});

export default connect(mapStateToProps, { login })(Login);
