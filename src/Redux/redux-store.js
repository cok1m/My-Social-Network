import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store
