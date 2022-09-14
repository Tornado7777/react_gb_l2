import { GET_GISTS_BY_SEARCH_START, GET_GISTS_BY_SEARCH_SUCCESS, GET_GISTS_BY_SEARCH_ERROR } from "./types";

export const getGistsBySearchStart = () => ({ type: GET_GISTS_BY_SEARCH_START });
export const getGistsBySearchSuccess = (gists) => ({
  type: GET_GISTS_BY_SEARCH_SUCCESS,
  payload: gists,
});
export const getGistsBySearchError = (error) => ({
  type: GET_GISTS_BY_SEARCH_ERROR,
  payload: error,
});
