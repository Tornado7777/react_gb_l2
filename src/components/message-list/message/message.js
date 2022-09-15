import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

function ShowTime(date){
  if (typeof date !== 'string')
  date =date.toLocaleTimeString('en-US',{
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  });
  //console.log("ShowTime date:", date)
  return date;
}

export function Message({ message, roomId }) {
  const dispatch = useDispatch();
  console.log("messgage:", message);
  message.date = ShowTime(message.date);
  console.log("messgage from ShowTime:", message);
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{message.date}</p>
      <button onClick={() => dispatch(deleteMessage(roomId, message.id))}>
        x
      </button>
    </div>
  );
}
