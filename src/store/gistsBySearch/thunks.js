import { getGistsBySearchStart, getGistsBySearchSuccess, getGistsBySearchError } from "./actions";

export const getBySearchGists = (name) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsBySearchStart());

    const { data } = await api.searchGistsByNameApi(name);

    dispatch(getGistsBySearchSuccess(data));
  } catch (e) {
    dispatch(getGistsBySearchError(e));
  }
};
