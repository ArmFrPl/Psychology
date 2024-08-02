import {SET_LOGGED_IN, SET_LOGGED_OUT} from "../actions/types";

const DEFAULT_STATE = {
  loggedIn: false,
}

export default (state = DEFAULT_STATE, action) => {

  if (action.type === SET_LOGGED_IN) {
    return {
      ...state,
      loggedIn: true
    }
  }
  if (action.type === SET_LOGGED_OUT) {
    return {
      ...state,
      loggedIn: false
    }
  }
  return state;
}