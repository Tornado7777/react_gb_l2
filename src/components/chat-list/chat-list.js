import { List } from "@mui/material";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteConversationByName as deleteConversation,
  createConversationByName as createConversation,
  conversationsSelector,
} from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { roomId } = useParams();

  const deleteConversationByName = useCallback(
    (name, e) => {
      e.preventDefault();
      dispatch(deleteConversation(name));
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  const createConversationByName = () => {
    const name = prompt("Введите имя: ");
    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидное имя");
    }
  };

  console.log("State.converstations from chat list:", conversations);
  
  return (
    <List component="nav">
      <button onClick={createConversationByName}>create</button>

      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={chat === roomId}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  );
};
