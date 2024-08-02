import {
  GET_USER, GET_STATUS, SET_LOGGED_IN, DELETE_USER
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