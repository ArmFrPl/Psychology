import {
  GET_USER,
  GET_STATUS,
  SET_LOGGED_IN,
  DELETE_USER,
  FETCH_USERS_DATA_REQUEST,
  FETCH_USERS_DATA_SUCCESS,
  FETCH_USERS_DATA_FAILURE,
  FETCH_THERAPISTS_DATA_REQUEST, FETCH_THERAPISTS_DATA_SUCCESS, FETCH_THERAPISTS_DATA_FAILURE
} from "./types";
import axios from "axios";

export const getGoogleUser = async (prof) => {
  const request = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${prof.access_token}`, {
    headers: {
      Authorization: `Bearer ${prof.access_token}`,
      Accept: 'application/json'
    }
  });

  return({type: GET_USER, payload: request.data});
}
export const setIsLoggedIn = async () => {
  return({type: SET_LOGGED_IN});
};
export const setStatus = async (status) => {
  return({type: GET_STATUS, payload: status});
};
export const deleteUser = async () => {
  return({type: DELETE_USER});
};

export const fetchUsersDataRequest = () => ({ type: FETCH_USERS_DATA_REQUEST });
export const fetchUsersDataSuccess = (data) => ({ type: FETCH_USERS_DATA_SUCCESS, payload: data });
export const fetchUsersDataFailure = (error) => ({ type: FETCH_USERS_DATA_FAILURE, payload: error });

export const fetchUsersData = () => {
  return async (dispatch) => {
    dispatch(fetchUsersDataRequest());
    try {
      const response = await fetch('http://localhost:3001/api/users');
      const data = await response.json();
      dispatch(fetchUsersDataSuccess(data));
    } catch (error) {
      dispatch(fetchUsersDataFailure('Error fetching data'));
    }
  };
};
export const fetchTherapistsDataRequest = () => ({ type: FETCH_THERAPISTS_DATA_REQUEST });
export const fetchTherapistsDataSuccess = (data) => ({ type: FETCH_THERAPISTS_DATA_SUCCESS, payload: data });
export const fetchTherapistsDataFailure = (error) => ({ type: FETCH_THERAPISTS_DATA_FAILURE, payload: error });

export const fetchTherapistsData = () => {
  return async (dispatch) => {
    dispatch(fetchTherapistsDataRequest());
    try {
      const response = await fetch('http://localhost:3001/api/therapists');
      const data = await response.json();
      dispatch(fetchTherapistsDataSuccess(data));
    } catch (error) {
      dispatch(fetchTherapistsDataFailure('Error fetching data'));
    }
  };
};