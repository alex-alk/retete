import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "../../Auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    Auth.login(
      this.state,
      () => {
        window.location.href = "/admin";
      },
      () => {
        toast.warn("Check your username and password", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="page-content">
        <form
          action="/api/login"
          method="post"
          className="g-3 login-form"
          id="form"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-3">
            <label>Username:</label>
            <input
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <ToastContainer autoClose={5000} />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Login | Retete";
  }
}
export default withRouter(Login);
