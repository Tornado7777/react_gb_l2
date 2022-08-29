import { NavLink } from "react-router-dom"

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
  return (
    <div>
      {menu.map(
        (item) => (
          <NavLink key={item.to} to={item.to}>{item.title}</NavLink>
        )
      )}
    </div>
  );
};
