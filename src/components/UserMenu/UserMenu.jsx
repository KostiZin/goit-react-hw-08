import { logOut } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="mr-4">
      <button
        onClick={() => dispatch(logOut())}
        className="btn btn-ghost hover:bg-indigo-800 hover:text-white"
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
