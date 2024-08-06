import {
  FETCH_THERAPISTS_DATA_FAILURE,
  FETCH_THERAPISTS_DATA_REQUEST, FETCH_THERAPISTS_DATA_SUCCESS,
} from "../actions/types";

const DEFAULT_STATE = {
  therData: [],
  loading: false,
  error: null
}
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_THERAPISTS_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_THERAPISTS_DATA_SUCCESS:
      return { ...state, loading: false, therData: action.payload };
    case FETCH_THERAPISTS_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
