import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { counterReducer } from "./counter";
import { profileChekBoxReducer1, profileChekBoxReducer2 } from "./profile-chek-box"
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { logger, timeScheduler, dateMessage , botMessage } from "./middlewares";



const persistConfig = {
    key: "gbchat",
    storage,
    whitelist: ["counter","profile",  "messages", "profileChekBox1","profileChekBox2", "conversations"],
  };
  
  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      counter: counterReducer,
      profile: profileReducer,
      messages: messagesReducer,
      profileChekBox1: profileChekBoxReducer1,
      profileChekBox2: profileChekBoxReducer2,
      conversations: conversationsReducer      
    })
  );
  
  export const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(dateMessage, timeScheduler, botMessage, thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
  );
  
  export const persistor = persistStore(store); 

