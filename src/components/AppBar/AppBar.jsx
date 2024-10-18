import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./AppBar.module.css";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <Navigation />
      {isLoggedIn && (
        // <button type="button" onClick={() => dispatch(logOut())}>
        //   Log out
        // </button>
        <button onClick={() => dispatch(logOut())} className="btn btn-ghost">
          Log out
        </button>
      )}
      {!isLoggedIn && <AuthNav />}
    </div>
  );
};

export default AppBar;
