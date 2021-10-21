import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(SERVER_URL + "api/recipeCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.value }),
    }).then(() => {
      this.props.history.push("/admin/category");
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Add recipe</h1>
          <form
            className="row g-3"
            id="form"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="page-content">
          <h1 className="page-title">Add chapter</h1>
          <form id="form-chapter" method="POST">
            Platform:{" "}
            <select className="mb-4">
              <option>A</option>
            </select>
            <div className="form-group mb-4">
              Name: <input type="text" name="name" />
            </div>
            <textarea id="summernote" name="content"></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Create recipe | Rețete";
  }
}
export default withRouter(CategoryCreate);
