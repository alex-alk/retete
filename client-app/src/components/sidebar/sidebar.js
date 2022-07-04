import React, { Component } from "react";
//import { SERVER_URL } from "../../constants";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import("./sidebar.css");

class Sidebar extends Component {
  render() {
    return (
      <aside className={"bd-sidebar" + this.props.x}>
        <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
          <a
            href="/admin/home"
            className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <span className="fs-5 fw-semibold">Admin Dashboard</span>
          </a>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                id="platforms-btn"
                data-bs-target="#categories"
                aria-expanded="false"
              >
                Categories
              </button>
              <div className="collapse" id="categories">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link
                      id="show-platforms-link"
                      to="/admin/categories"
                      className="link-dark rounded"
                    >
                      Show categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="add-platform-link"
                      to="/admin/categories/create"
                      className="link-dark rounded"
                    >
                      Add category
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                id="add-chapter-btn"
                data-bs-target="#recipes"
                aria-expanded="false"
              >
                Recipes
              </button>
              <div className="collapse" id="recipes">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link
                      id="show-chapters-link"
                      to="/admin/recipes"
                      className="link-dark rounded"
                    >
                      Show recipes
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="add-chapters-link"
                      to="/admin/recipes/create"
                      className="link-dark rounded"
                    >
                      Add recipe
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
export default withRouter(Sidebar);
