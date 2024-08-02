import {combineReducers} from "redux";
import getUser from "./getUser";
import getLoggedIn from "./getLoggedIn";
import getStatus from "./getStatus";

export default combineReducers({
  user: getUser,
  loggedIn: getLoggedIn,
  status: getStatus,
});