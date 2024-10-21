import { useNavigate } from "react-router-dom";

const HomeNotLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.guim.co.uk/img/media/883f90e83ae6c3f4bcbd8f7c564fe96519090fb1/119_0_4996_2999/master/4996.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=913f00b0b4d31a7ce246f81975eb92c1)",
          height: "calc(100vh - 80px)",
          width: "100vw",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h2 className="mb-5 text-5xl font-bold">
              Welcome to Phonebook – Manage your contacts easily and securely.
            </h2>
            <p className="mb-5">
              Add contacts, access your information anytime, and manage your
              data seamlessly.
            </p>
            <div className="flex justify-center gap-8">
              <button
                className="btn btn-primary bg-indigo-800 border-indigo-800"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="btn btn-primary bg-indigo-800 border-indigo-800"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNotLoggedIn;
