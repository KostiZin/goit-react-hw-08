import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div>
      <nav className={s.wrapper}>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
        <NavLink className={buildLinkClass} to="/register">
          Register
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
