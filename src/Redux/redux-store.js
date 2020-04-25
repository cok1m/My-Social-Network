import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunk)));
// let store = createStore(reducers, applyMiddleware(thunk));
export default store
