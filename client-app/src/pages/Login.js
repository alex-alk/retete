import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import { connect } from "react-redux";
import * as authActions from "../redux/authActions";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.onClickLogin = this.onClickLogin.bind(this);
  }

  state = {
    username: "",
    password: "",
    pendingApiCall: false,
    errors: {},
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
      errors: {},
    });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({
      password: value,
      errors: {},
    });
  };

  onClickLogin() {
    this.setState({ pendingApiCall: true });

    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.actions
      .postLogin(body)
      .then((response) => {
        this.setState({ pendingApiCall: false });

        if (response.data && response.data.token) {
          localStorage.setItem("jwt", response.data.token);
          this.props.history.push("/admin/home");
        }
      })
      .catch((error) => {
        let errors = error.response.data;
        this.setState({ errors, pendingApiCall: false });
      });
  }

  render() {
    let errors = this.state.errors ?? {};
    let disabledSubmit = false;

    if (this.state.username === "" || this.state.password === "") {
      disabledSubmit = true;
    }

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg mb-3", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Email Address"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg mb-3", {
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
                {errors.apiError && (
                  <div className="col-12 mb-3">
                    <div className="alert alert-danger">{errors.apiError}</div>
                  </div>
                )}
                <button
                  onClick={this.onClickLogin}
                  type="button"
                  id="login-btn"
                  className="btn btn-primary btn-block"
                  disabled={disabledSubmit || this.state.pendingApiCall}
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
    document.title = "Login | Retete";
  }
}

Login.defaultProps = {
  actions: {
    postLogin: () => {
      return new Promise((resolve, reject) => {
        resolve({});
      });
    },
  },
  dispatch: () => {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postLogin: (body) => dispatch(authActions.loginHandler(body)),
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
