import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          CRUD RestAPI
        </a>

        <Link className="btn btn-outline-light" to="/add-employee">
          <>
            <FaPlusCircle /><span> </span>
            Add Employee
          </>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
