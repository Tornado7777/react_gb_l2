import { List } from "@mui/material";
import { useCallback, useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chatList] = useState(["room1", "room2", "room3"]);
  const [selectedRoom, setSelectedRoom] = useState("room1");

  const handleListItemClick = useCallback((room) => {
    setSelectedRoom(room);
  }, []);

  return (
    <List component="nav">
      {chatList.map((chat) => (
        <Chat
          key={chat}
          title={chat}
          selected={chat === selectedRoom}
          handleListItemClick={handleListItemClick}
        />
      ))}
    </List>
  );
};
