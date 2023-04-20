import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg_colors_2 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link active" to="/add">
              New Question
            </Link>
            <Link className="nav-link " to="/leaderboard">
              leader Board
            </Link>
            <Link className="nav-link " to="/">
              log Out
            </Link>
          </div>
          <div>
            Hello <span className="fw-bold">{props.users.loginUser}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(NavBar);
