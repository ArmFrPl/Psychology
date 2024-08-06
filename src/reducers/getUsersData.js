import {FETCH_USERS_DATA_FAILURE, FETCH_USERS_DATA_REQUEST, FETCH_USERS_DATA_SUCCESS} from "../actions/types";

const DEFAULT_STATE = {
  usersData: [],
  loading: false,
  error: null
}
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_DATA_SUCCESS:
      return { ...state, loading: false, usersData: action.payload };
    case FETCH_USERS_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
