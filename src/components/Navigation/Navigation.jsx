import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const userName = useSelector(selectUser);

  return (
    <nav>
      <div>Welcome, {userName.name}</div>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
