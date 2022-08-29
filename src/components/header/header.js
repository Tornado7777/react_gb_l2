import { NavLink } from "react-router-dom";
import {Button, TextField} from "@mui/material"
import { useContext } from "react";
import { ThemeContext} from "../../theme-context";

const menu = [
  {
    title: " Home ",
    to: "/",
  }, {
    title: " Profile ",
    to: "/profile",
  },
  {
    title: " Chat ",
    to: "/chat",
  },
]

export const Header = () => {
  const {theme , themeSetter} = useContext(ThemeContext);
  console.log("theme: ",theme);
  return (
    <div>
      <TextField sx={{ width: '10ch'}} id="outlined-basic" label={theme.name} variant="outlined" disabled />
      <Button disabled={theme.name ==="light"} variant="text" onClick={()=> themeSetter("light")}>light</Button>
      <Button disabled={theme.name ==="dark"} variant="text" onClick={()=> themeSetter("dark")}>dark</Button>

      
      {menu.map(
        (item) => (
          <NavLink key={item.to} to={item.to}>{item.title}</NavLink>
        )
      )}
    </div>
  );
};
