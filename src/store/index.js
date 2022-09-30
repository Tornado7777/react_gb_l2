import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";
import { profileChekBoxReducer1, profileChekBoxReducer2 } from "./profile-chek-box"
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";

export const store = createStore(combineReducers(
    {
        counter: counterReducer,
        profileChekBox1: profileChekBoxReducer1,
        profileChekBox2: profileChekBoxReducer2,
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messagesReducer,
    }
));