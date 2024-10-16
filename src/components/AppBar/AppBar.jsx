import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div>
      <Navigation />

      <AuthNav />

      <UserMenu />
    </div>
  );
};

export default AppBar;
