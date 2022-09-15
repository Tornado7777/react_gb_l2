import {get, child, ref, set, remove, push } from "firebase/database";
import { database } from "./firebase";

export const getMessagesApi = () => {
    return get(child(ref(database), "messages"));
};

export const createMessageApi = (message, roomId) => {
    return push(child(ref(database), `messages/${roomId}`),
    message);
};

export const removeMessageApi = (message) => {
    return remove(child(ref(database), `messages/${message}`));
};


/*
const db = {
    conversations:{
        room1: "room1",
        room2: "room2",
        ............,
    },
    messages: {
        room1: [messages1,...],
        room2: [messages1,...],
    }
}

messages: {
    author: "name",
    message:"string",
    date: "string"
}
*/