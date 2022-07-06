import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  render() {
    let links;
    if (this.props.user.isLoggedIn) {
      links = (
        <button
          onClick={this.handleLogout}
          type="submit"
          className="nav-link active"
        >
          Logout
        </button>
      );
    } else {
      links = (
        <Link to="/admin/login" className="nav-link active">
          Login
        </Link>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i id="page-logo" className="fas fa-utensils"></i>
          </a>
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
              <li className="nav-item">{links}</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  handleLogout() {
    const action = {
      type: "logout-success",
    };
    this.props.dispatch(action);
    window.location.href = "/admin/login";
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Navbar);
