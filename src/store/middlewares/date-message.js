
import { sendMessage, SEND_MESSAGE } from "../messages";


export const dateMessage = (store) => (next) => (action) => {
    let date = new Date();
    var dateString = date.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    console.log("Date format:", dateString );
    if (action.type === SEND_MESSAGE && action.payload.message && action.payload.author) {
       
        store.dispatch(
            sendMessage(action.payload.roomId, {
                date: dateString
            })
        );

    };
    console.log("ShowTime Store:", store.getState());
    

    return next(action);
};