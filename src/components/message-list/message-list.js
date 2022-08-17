import React, { useState, useEffect } from "react";
import { Message } from "./message";

function ShowTime(){
  let date = new Date();
  return date.toLocaleTimeString();
}



export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: ShowTime() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: ShowTime() },
        ]);
      }, 1500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  return (
    <>
      <div>
        {messageList.map((message) => (
          <Message message={message} />
        ))}
      </div>

      <button onClick={sendMessage}>send</button>
      <input
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
      />
    </>
  );
};
