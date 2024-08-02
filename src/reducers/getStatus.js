import {GET_STATUS} from "../actions/types";

const DEFAULT_STATE = {
  status: ''
}

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_STATUS) {
    return {
      ...state,
      status: action.payload
    }
  }
  return state;
}