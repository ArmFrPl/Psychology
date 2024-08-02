import {DELETE_USER, GET_USER} from "../actions/types";

const DEFAULT_STATE = {
  user: {
    firstName: '',
    lastName: '',
    email: ''
  }
}

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_USER) {
    return {
      ...state,
      user: {
        firstName: action.payload.given_name,
        lastName: action.payload.family_name,
        email: action.payload.email
      }
    }
  }
  if (action.type === DELETE_USER) {
    return {
      ...state,
      user: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }
  return state;
}