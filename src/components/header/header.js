import { NavLink } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";

const menuWithOutSession = [
  {
    title: " Home ",
    to: "/",
  },
  {
    title: " Login ",
    to: "/login",
  },
  {
    title: " Sign UP ",
    to: "/signup",
  },
];

const menuWithSession = [
  {
    title: " Home ",
    to: "/",
  },
  {
    title: " Profile ",
    to: "/profile",
  },
  {
    title: " Chat ",
    to: "/chat",
  },
  {
    title: " Gists ",
    to: "/gists",
  },
];

export const Header = ({ email }) => {
  const { theme, themeSetter } = useContext(ThemeContext);
  console.log("theme: ", theme);
  return (
    <div>
      {!!email && (
        <div>
          <h1> USER: {email} </h1>
        </div>
      )}
      
      <Button disabled={email == null} variant="text" onClick={() => signOut(auth)}>Sign Out</Button>
      <TextField sx={{ width: '10ch' }} id="outlined-basic" label={theme.name} variant="outlined" disabled />
      <Button disabled={theme.name === "light"} variant="text" onClick={() => themeSetter("light")}>light</Button>
      <Button disabled={theme.name === "dark"} variant="text" onClick={() => themeSetter("dark")}>dark</Button>

      {!!email && menuWithSession.map(
        (item) => (
          <NavLink key={item.to} to={item.to}>{item.title}</NavLink>
        )
      )}

      {!email && menuWithOutSession.map(
        (item) => (
          <NavLink key={item.to} to={item.to}>{item.title}</NavLink>
        )
      )}
    </div>
  );
};
