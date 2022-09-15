import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { getPublicApi, searchGistsByNameApi } from "../api/gists";
import { counterReducer } from "./counter";
import { profileChekBoxReducer1, profileChekBoxReducer2 } from "./profile-chek-box"
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { gistsReducer } from "./gists";
import { gistsBySearchReducer } from "./gistsBySearch";
import { logger, timeScheduler, botMessage } from "./middlewares";
import { 
  createConversationApi, 
  getConversationsApi, 
  removeConversationApi } from "../api/conversations";
import { 
  getMessagesApi, 
  createMessageApi, 
  removeMessageApi } from "../api/messages"
const api = {
  getPublicApi,
  searchGistsByNameApi,
  createConversationApi,
  getConversationsApi,
  removeConversationApi,
  getMessagesApi, 
  createMessageApi, 
  removeMessageApi,
};


// setTimeout(() => {
//   createMessageApi( { 
//     author: "User", 
//     message: "test", 
//     date: new Date(),
//     id: 1,}
//     , "room1");
//     createMessageApi( { 
//       author: "User", 
//       message: "test2", 
//       date: new Date(),
//       id: 2,}
//       , "room2");
//       createMessageApi( { 
//         author: "User", 
//         message: "test3", 
//         date: new Date(),
//         id: 3,}
//         , "room2");
// },0);





const persistConfig = {
  key: "gbchat",
  storage,
  //whitelist: ["counter","profile",  "messages", "profileChekBox1","profileChekBox2", "conversations", "gists"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    messages: messagesReducer,
    profileChekBox1: profileChekBoxReducer1,
    profileChekBox2: profileChekBoxReducer2,
    conversations: conversationsReducer,
    gists: gistsReducer,
    gistsBySearch: gistsBySearchReducer,
  })
);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      logger,
      timeScheduler,
      botMessage,
      thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);

