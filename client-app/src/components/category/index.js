import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

class CategoryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeCategs: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .delete(SERVER_URL + "/api/recipeCategories/" + event.target.id.value, {})
      .then(() => {
        this.componentDidMount();
      });
  }

  render() {
    const categs = this.state.recipeCategs.map((recipeCateg, index) => (
      <tr key={index}>
        <td>{recipeCateg.name}</td>
        <td style={{ maxWidth: "55px" }}>
          <Link
            style={{ marginRight: "5px" }}
            className="btn btn-primary mr-1"
            to={"/admin/categories/" + recipeCateg.id + "/edit"}
          >
            Edit
          </Link>
          <form style={{ display: "inline" }} onSubmit={this.handleSubmit}>
            <input type="hidden" name="id" value={recipeCateg.id} />
            <button className="btn btn-danger" type="submit">
              Delete
            </button>
          </form>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Recipe categories</h1>
          <table
            className="table table-bordered table-responsive"
            style={{ maxWidth: "600px" }}
          >
            <thead>
              <tr>
                <td>Name</td>
                <td style={{ maxWidth: "30px" }}>Action</td>
              </tr>
            </thead>
            <tbody>{categs}</tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Admin | Recipes";
    axios
      .get(SERVER_URL + "/api/recipeCategories")
      .then((response) => {
        this.setState({
          recipeCategs: response.data,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(CategoryIndex);
