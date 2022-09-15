import { 
    getConversationsStart, 
    getConversationsSuccess, 
    getConversationsError,
    createConversationStart,
    createConversationSuccess,
    createConversationError,
    deleteConversationStart,
    deleteConversationSuccess,
    deleteConversationError
 } from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
    const conversations = [];
    try {
        dispatch(getConversationsStart());
        const snapshot = await api.getConversationsApi();

        snapshot.forEach((snap) => {
            conversations.push(snap.val());
        });

        dispatch(getConversationsSuccess(conversations))
    } catch (e) {
        dispatch(getConversationsError(e));
    }
}

export const createConversationByName = (conversation) => async (dispatch, _, api) => {
    try {
        dispatch(createConversationStart());
        
        await api.createConversationApi(conversation);
        dispatch(createConversationSuccess(conversation))
    } catch (e) {
        dispatch(createConversationError(e));
    }
}

export const deleteConversationByName = (conversation) => async (dispatch, _, api) => {
    try {
        dispatch(deleteConversationStart());
        await api.removeConversationApi(conversation);
        dispatch(deleteConversationSuccess(conversation))
    } catch (e) {
        dispatch(deleteConversationError(e));
    }
}