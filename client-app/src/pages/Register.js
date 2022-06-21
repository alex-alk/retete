import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
    pendingApiCall: false,
  };

  onSubmit() {
    const user = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    };
    this.setState({ pendingApiCall: true });
    this.props.actions
      .register(user)
      .then((response) => {
        this.setState({ pendingApiCall: false });
      })
      .catch((error) => {
        this.setState({ pendingApiCall: false });
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

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let errors = {};
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.displayName,
                    })}
                    placeholder="Name"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.onChange}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.displayName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.onSubmit}
                  disabled={this.state.pendingApiCall}
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
};

export default withRouter(Register);
