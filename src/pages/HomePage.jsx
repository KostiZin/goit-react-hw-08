import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";

const HomePage = () => {
  const userName = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <div>{isLoggedIn && <div>Welcome, {userName.name}</div>}</div>;
};

export default HomePage;
