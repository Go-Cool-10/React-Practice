import React from "react";
import { Link } from "react-router-dom";
const Header = ({user}) => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/services">Servies</Link>
      <br />
      <Link to="/aboutus">About Us</Link>
      <br />
      {user ? (
        <>
          <Link>Welcome, {user.username} </Link>
          <br />
          <Link to="/logout">Log Out</Link>
          <Link to="/products">Products</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Header;
