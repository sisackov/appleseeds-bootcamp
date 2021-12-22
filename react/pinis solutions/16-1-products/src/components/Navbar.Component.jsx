import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const styleContainer = {
    display: "flex",
    alignItems: "center",
    background: "gray",
    borderBottom: "1px solid black",
    height: "50px",
  };
  const styleNavItem = {
    marginLeft: "1rem",
  };
  return (
    <div style={styleContainer}>
      <Link style={styleNavItem} to="/">
        Home
      </Link>
      <Link style={styleNavItem} to="/products">
        Products
      </Link>
    </div>
  );
};

export default NavBar;
