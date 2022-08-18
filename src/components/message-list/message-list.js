import React, { useState, useEffect } from "react";
import { Message } from "./message";

function ShowTime(){
  let date = new Date();
  return date.toLocaleTimeString();
}



export const MessageList = () => {
  //привязываем к стету массивы
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  //добавляем в массив значения, т.к. массив пересоздаётся нужно добавлять предыдущие значения
  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: ShowTime() },
      ]);
      //обнуляем значение введенной строки
      setValue("");
    }
  };

  //функция обработки нажатия клавишы Enter
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  //обработка нажатия кнопки на сайте
  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;
//проверка на пустоту и автора, не нужно отвечать пока не было сообщений от пользователя, и не нужно отвечать повтороно боту
    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: ShowTime() },
        ]);
      }, 1500);

      return () => {
        //очищаем таймер
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  //выводится список сообщений
  return (
    <>
    
      <div>
        {messageList.map((message, index) => (
          <Message message={message} key = {index}/>
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
