// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import HomeNotLoggedIn from "../components/HomeNotLoggedIn/HomeNotLoggedIn";
import HomeLoggedIn from "../components/HomeLoggedIn/HomeLoggedIn";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <div>
      <HomeNotLoggedIn />
    </div>
  ) : (
    <div>
      <HomeLoggedIn />
    </div>
  );
};

export default HomePage;
