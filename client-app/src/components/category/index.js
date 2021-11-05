import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class CategoryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeCategs: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(SERVER_URL + "api/recipeCategories/" + event.target.id.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: event.target.id.value }),
    }).then(() => {
      this.componentDidMount();
    });
  }

  render() {
    const categs = this.state.recipeCategs.map((recipeCateg, index) => (
      <tr key={index}>
        <td>{recipeCateg.name}</td>
        <td>
          <Link
            className="btn btn-primary"
            to={"/admin/category/" + recipeCateg.id + "/edit"}
          >Edit
          </Link>
          <form style={{display: "inline"}} onSubmit={this.handleSubmit}>
            <input type="hidden" name="id" value={recipeCateg.id} />
            <button className="btn btn-danger" type="submit">Delete</button>
          </form>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Recipe categories</h1>

          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{categs}</tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Admin | Rețete";
    console.log("1");
    fetch(SERVER_URL + "api/recipeCategories")
      .then((response) => {
        if (response.redirected) {
          window.location.href = response.url;
        }  
        response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          recipeCategs: responseData._embedded.recipeCategories,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(CategoryIndex);
