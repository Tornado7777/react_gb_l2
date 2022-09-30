import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Chat = memo(({ title, selected, handleListItemClick }) => {
  const navigate = useNavigate();

  useEffect(()=>{
    const listener = ({code}) => {
      if (code === "Escape"){
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);
  
  return (
    <ListItemButton
      selected={selected}
      onClick={() => handleListItemClick(title)}
    >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>
  );
});
