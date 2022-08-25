import { NavLink } from "react-router-dom"

const menu = [
  {
    title: "Home",
    to: "/",
  }, {
    title: "Profile",
    to: "/profile",
  },
  {
    title: "chat",
    to: "/chat",
  },
]

export const Header = () => {
  return (
    <div>
      {menu.map(
        (item) => (
          <NavLink to={item.to}>{item.title}</NavLink>
        )
      )}
    </div>
  );
};
