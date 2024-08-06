import {combineReducers} from "redux";
import getUser from "./getUser";
import getLoggedIn from "./getLoggedIn";
import getStatus from "./getStatus";
import getUsersData from "./getUsersData";
import getTherData from "./getTherData";

export default combineReducers({
  user: getUser,
  loggedIn: getLoggedIn,
  status: getStatus,
  users: getUsersData,
  thers: getTherData,
});