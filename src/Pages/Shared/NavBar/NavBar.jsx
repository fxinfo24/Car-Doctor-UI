import { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProviders/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { users, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" className="justify-between">
          About
        </Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to = '/appointment'>
          <button className="btn btn-outline btn-accent">Appointment</button>
        </Link>
      </div>
      <div className="w-44 ml-5">
        {/* Conditional: If user logged in, show profile */}

        {users && <FaUserCircle style={{ fontSize: "41px" }}></FaUserCircle>}

        {/* Conditional: If logged in; Show log Out and so */}
        {users ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
