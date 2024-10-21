import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-outline m-4">Home</button>
      </Link>
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png"
        alt="Error 404"
        width="100%"
      />
    </div>
  );
};

export default NotFoundPage;
