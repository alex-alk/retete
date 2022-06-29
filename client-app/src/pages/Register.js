import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
    pendingApiCall: false,
    errors: {},
    passwordRepeatConfirmed: true,
  };

  onSubmit() {
    this.setState({ pendingApiCall: true });
    const user = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    };
    this.props.actions
      .register(user)
      .then((response) => {
        this.setState({ pendingApiCall: false }, () => {
          this.props.history.push("/admin/home");
        });
      })
      .catch((error) => {
        let errors = error.response.data;
        this.setState({ pendingApiCall: false, errors });
      });

    //event.preventDefault();
    // Auth.register(
    //   this.state,
    //   () => {
    //     window.location.href = "/admin";
    //   },
    //   () => {
    //     toast.warn("Error", {
    //       position: toast.POSITION.BOTTOM_LEFT,
    //     });
    //   }
    // );
  }

  onChangeDisplayName = (event) => {
    const value = event.target.value;
    const errors = { ...this.state.errors };
    delete errors.displayName;
    this.setState({ displayName: value, errors });
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    const errors = { ...this.state.errors };
    delete errors.username;
    this.setState({ username: value, errors });
  };

  onChangePasswordRepeat = (event) => {
    const value = event.target.value;
    const passwordRepeatConfirmed = this.state.password === value;
    const errors = { ...this.state.errors };
    errors.confirmPassword = passwordRepeatConfirmed
      ? ""
      : "Does not match the password";
    this.setState({ confirmPassword: value, passwordRepeatConfirmed, errors });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    const passwordRepeatConfirmed = this.state.confirmPassword === value;
    const errors = { ...this.state.errors };
    delete errors.password;
    errors.confirmPassword = passwordRepeatConfirmed
      ? ""
      : "Does not match the password";
    this.setState({ password: value, passwordRepeatConfirmed, errors });
  };

  render() {
    let errors = this.state.errors;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.displayName,
                    })}
                    placeholder="Name"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.onChangeDisplayName}
                  />
                  {errors.displayName && (
                    <div className="invalid-feedback">{errors.displayName}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChangePasswordRepeat}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block mt-3"
                  onClick={this.onSubmit}
                  disabled={
                    this.state.pendingApiCall ||
                    !this.state.passwordRepeatConfirmed
                  }
                >
                  {this.state.pendingApiCall && (
                    <div className="spinner-border spinner-border-sm text-light spinner-border mr-sm-1">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Sign Up | Retete";
  }
}

Register.defaultProps = {
  actions: {
    register: () => {
      return new Promise((resolve, reject) => {
        resolve({});
      });
    },
  },
  history: {
    push: () => {},
  },
};

export default withRouter(Register);
