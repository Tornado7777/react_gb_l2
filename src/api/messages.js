import { get, child, ref, set, remove, push } from "firebase/database";
import { database } from "./firebase";
import { nanoid } from "nanoid";

function ShowTime(date) {
    if (typeof date !== 'string')
        date = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    console.log("ShowTime date:", date)
    return date;
}

export const getMessagesApi = () => {
    return get(child(ref(database), "messages"));
};

export const createMessageApi =async (message, roomId) => {
    const newMessage = { ...message, id: nanoid(), date: String(new Date()) };

    await push(child(ref(database), `messages/${roomId}`), newMessage);
  
    return newMessage;
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