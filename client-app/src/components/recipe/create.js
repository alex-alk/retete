import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./recipe.css";
import axios from "axios";

class RecipeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "",
      name: "",
      description: "",
      content: "",
      recipeCategs: [],
      photo: "",
      editorState: EditorState.createEmpty(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.photo);
    formData.append(
      "recipe",
      JSON.stringify({
        name: this.state.name,
        content: this.state.content,
        description: this.state.description,
        category: { id: this.state.categoryId },
      })
    );

    fetch(SERVER_URL + "/api/recipes", {
      method: "POST",
      headers: { Authorization: localStorage.getItem("jwt") },
      body: formData,
    })
      .then(() => {
        this.props.history.push("/admin/recipes");
      })
      .catch((err) => console.error(err));
  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "photo") {
      value = target.files[0];
    }

    this.setState({
      [name]: value,
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Add recipe</h1>
          <form id="form-chapter" method="POST" onSubmit={this.handleSubmit}>
            Category:{" "}
            <select
              value={this.state.categoryId}
              className="mb-4"
              name="categoryId"
              onChange={this.handleChange}
            >
              {this.state.recipeCategs.map((recipeCateg, index) => (
                <option value={recipeCateg.id} key={index}>
                  {recipeCateg.name}
                </option>
              ))}
            </select>
            <div className="form-group mb-4">
              Name:&nbsp;
              <input
                value={this.state.name}
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-4">
              Description:&nbsp;
              <input
                value={this.state.description}
                style={{ width: "100%" }}
                type="text"
                name="description"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-4">
              Photo:&nbsp;
              <input type="file" name="photo" onChange={this.handleChange} />
            </div>
            Steps:
            <div id="editor-wrapper">
              <Editor
                value={this.state.content}
                editorState={editorState}
                wrapperClassName="wrapper-draft"
                editorClassName="editor-draft"
                toolbarClassName="toolbar-draft"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
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
    axios
      .get(SERVER_URL + "/api/recipeCategories")
      .then((response) => {
        this.setState({
          recipeCategs: response.data,
          categoryId: response.data[0].id,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(RecipeCreate);
