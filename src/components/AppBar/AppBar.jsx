import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);
  return (
    <div>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <button>Log out</button>}
    </div>
  );
};

export default AppBar;
