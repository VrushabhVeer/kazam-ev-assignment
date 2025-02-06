import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="py-5 sticky top-0 z-10 bg-white">
      <div className="container w-11/12 md:w-10/12 mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Task Manager
        </Link>

        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/" className="hover:underline">
                My Tasks
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 font-medium bg-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
