const HomeLoggedIn = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/370474/pexels-photo-370474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height: "calc(100vh - 80px)",
        width: "100vw",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h2 className="mb-5 text-5xl font-bold text-indigo-950">
            Manage Your Contacts and Stay Organized
          </h2>
          <p className="mb-5">
            Quickly view your saved contacts and stay on top of your
            connections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLoggedIn;
