import { 
  GET_GISTS_BY_SEARCH_START, 
  GET_GISTS_BY_SEARCH_SUCCESS, 
  GET_GISTS_BY_SEARCH_ERROR 
} from "./types";

const initialState = {
  gistsBySearch: [],
  pendingBySearch: false,
  errorBySearch: null,
};

export const gistsBySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_BY_SEARCH_START:
      return { ...state, pendingBySearch: true, error: null };
    case GET_GISTS_BY_SEARCH_SUCCESS:
      return { ...state, pendingBySearch: false, gistsBySearch: action.payload };
    case GET_GISTS_BY_SEARCH_ERROR:
      return { ...state, pendingBySearch: false, errorBySearch: action.payload };
    default:
      return state;
  }
};
