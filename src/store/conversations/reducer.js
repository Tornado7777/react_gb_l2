import {
  // CREATE_CONVERSATION, 
  // DELETE_CONVERSATION,
  GET_CONVERSATION_START,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_ERROR,
  DELETE_CONVERSATION_START,
  DELETE_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_ERROR,
} from "./types";

const initialState = {
  conversations: [],
  pending: false,
  pendingCreate: false,
  pendingDelete: false,
  error: null,
  errorCreate: null,
  errorDelete: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_CONVERSATION_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATION_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_CONVERSATION_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_CONVERSATION_START:
      return { ...state, pendingCreate: true, errorCreate: null };
    case CREATE_CONVERSATION_SUCCESS:
      return {
        ...state, pendingCreate: false,
        conversations: [...state.conversations, action.payload],
      };
    case CREATE_CONVERSATION_ERROR:
      return { ...state, pendingCreate: false, errorCreate: action.payload };

    case DELETE_CONVERSATION_START:
      return { ...state, pendingDelete: true, errorDelete: null };
    case DELETE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingDelete: false,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    case DELETE_CONVERSATION_ERROR:
      return { ...state, pendingDelete: false, errorDelete: action.payload };
    
      default:
      return state;
  }
};
