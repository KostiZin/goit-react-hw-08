import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && s.active);
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
