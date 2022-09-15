import { CREATE_CONVERSATION, 
  DELETE_CONVERSATION, 
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

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const getConversationsStart = () => ({
 type: GET_CONVERSATION_START
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATION_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATION_ERROR,
  payload: error,
});

export const createConversationStart = () => ({
  type: CREATE_CONVERSATION_START
 });
 
 export const createConversationSuccess = (conversation) => ({
   type: CREATE_CONVERSATION_SUCCESS,
   payload: conversation,
 });
 
 export const createConversationError = (error) => ({
   type: CREATE_CONVERSATION_ERROR,
   payload: error,
 });

 export const deleteConversationStart = () => ({
  type: DELETE_CONVERSATION_START
 });
 
 export const deleteConversationSuccess = (conversation) => ({
   type: DELETE_CONVERSATION_SUCCESS,
   payload: conversation,
 });
 
 export const deleteConversationError = (error) => ({
   type: DELETE_CONVERSATION_ERROR,
   payload: error,
 });