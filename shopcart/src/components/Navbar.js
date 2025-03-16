import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ totalQuantity }) => {
  return (
    <nav className="navbar navbar-light bg-info">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand text-white h1 mb-0" style={{ textDecoration: "none" }}>
          Shop to React
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            {totalQuantity} Items
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
