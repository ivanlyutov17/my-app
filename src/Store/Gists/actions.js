import { GET_GISTS_FAILURE,GET_GISTS_SUCCESS,GET_GISTS_REQUEST } from "./constants";
import { API_URL_PUBLIC } from "../../Pages/Gists/Gists";
export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});

export const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
});


export const getAllGists = () => async (dispatch) => {
  dispatch(getGistsRequest());

  try {
    const res = await fetch(API_URL_PUBLIC);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();

    dispatch(getGistsSuccess(result));
  } catch (err) {
    dispatch(getGistsFailure(err.message));
  }
};
