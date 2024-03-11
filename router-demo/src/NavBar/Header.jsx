import React from "react";
import { Link } from "react-router-dom";
const Header = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>

      <Link to="/services">Servies</Link>

      <Link to="/aboutus">About Us</Link>

      {user ? (
        <>
          <Link to="/products">Products</Link>
          <Link>Welcome, {user.username} </Link>
          <Link to="/logout">Log Out</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Header;
