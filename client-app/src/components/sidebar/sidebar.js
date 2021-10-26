import React, { Component } from "react";
//import { SERVER_URL } from "../../constants";
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Sidebar extends Component {


	render() {
		return (
			<aside className={'bd-sidebar' + this.props.x }>
				<div className="flex-shrink-0 p-3 bg-white" style={{width: 280}}>
					<a href="/admin/home" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
						<span className="fs-5 fw-semibold">Admin Dashboard</span>
					</a>
					<ul className="list-unstyled ps-0">
						<li className="mb-1">
							<button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" id="platforms-btn" data-bs-target="#platforms" aria-expanded="false">
								Categories
                    </button>
							<div className="collapse" id="platforms">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><Link id="show-platforms-link" to="/admin/category" className="link-dark rounded">Show categories</Link></li>
									<li><Link id="add-platform-link" to="/admin/category/create" className="link-dark rounded">Add category</Link></li>
								</ul>
							</div>
						</li>

						<li className="mb-1">
							<button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" id="add-chapter-btn" data-bs-target="#chapters" aria-expanded="false">
								Recipes
                    </button>
							<div className="collapse" id="chapters">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><Link id="show-chapters-link" to="/admin/recipes" className="link-dark rounded">Show recipes</Link></li>
									<li><Link id="add-chapters-link" to="/admin/recipes/create" className="link-dark rounded">Add recipe</Link></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</aside>
		);
	}


	/*
	render() {
		const categs = this.state.recipeCategs.map((recipeCateg, index) => (
			<li classNameName="mb-1" key={index}>
				<button classNameName="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={"#home-collapse-" + index} id={"btn-collapse-" + index} aria-expanded="false">
					{recipeCateg.name}
				</button>
				<div classNameName="collapse" id={"home-collapse-" + index}>
					<ul classNameName="btn-toggle-nav list-unstyled fw-normal pb-1 small">
						{recipeCateg.recipes.map((recipe, index2) => (
							<li key={index2}><a href="/chapter/index?id={recipe.id}&amp;platform=#{chapter.platform.id}&amp;chapter=#{chapter.urlName}" 
								id={"chapter-link-" + recipe.id} classNameName="link-dark rounded">{recipe.name}</a></li>
						))}
					</ul>
				</div>
			</li>
		));
		return (
			<aside classNameName="bd-sidebar">
				<div classNameName="flex-shrink-0 p-3 bg-white" style={{width: 280}}>
					<a href="/" classNameName="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
						<span classNameName="fs-5 fw-semibold">Rețete</span>
					</a>
					<ul classNameName="list-unstyled ps-0">
						{categs}
					</ul>
				</div >
			</aside >
		);
	}

	componentDidMount() {
		document.title = "Admin | Rețete";
		fetch(SERVER_URL + "api/recipeCategories")
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					recipeCategs: responseData._embedded.recipeCategories,
				});
			})
			.catch((err) => console.error(err));
	}*/

}
export default withRouter(Sidebar);
