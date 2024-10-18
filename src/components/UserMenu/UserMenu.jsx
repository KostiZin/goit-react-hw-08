import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <div>Welcome, {userName.name}</div>
      <button onClick={() => dispatch(logOut())} className="btn btn-ghost">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
