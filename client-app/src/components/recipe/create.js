import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./recipe.css";

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    /*
    fetch(SERVER_URL + "api/recipeCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.value }),
    }).then(() => {
      this.props.history.push("/admin/category");
    });
    */
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState, 
    })
  }

  render() {
    const {editorState} = this.state;
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
          <h1 className="page-title">Add recipe</h1>
          <form id="form-chapter" method="POST">
            Category:{" "}
            <select className="mb-4">
              <option>A</option>
            </select>
            <div className="form-group mb-4">
              Name: <input type="text" name="name" />
            </div>
            <div id="editor-wrapper">
        <Editor
  editorState={editorState}
  wrapperClassName="wrapper-draft"
  editorClassName="editor-draft"
  toolbarClassName="toolbar-draft"
  
  onEditorStateChange={this.onEditorStateChange}
/></div>
            <textarea className="d-none" id="textarea" name="content" value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}></textarea>
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
