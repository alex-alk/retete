import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i id="page-logo" className="fas fa-utensils"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav">
              {/*<li className="nav-item">
                                <a className="nav-link active" href="/#">Dashboard</a>
                            </li>*/}
              <li className="nav-item">
                {Auth.isAuthenticated && (
                  <form onSubmit={this.handleLogout}>
                    <button type="submit" className="nav-link active">
                      Logout
                    </button>
                  </form>
                )}
                {!Auth.isAuthenticated && (
                  <Link to="/admin/login" className="nav-link active">
                    Login
                  </Link>
                )}
              </li>
              {/*
                            <li className="nav-item">
                                <a href="/#" className="nav-link active">Register</a>
                            </li>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  handleLogout() {
    Auth.logout();
  }
}
export default Navbar;
