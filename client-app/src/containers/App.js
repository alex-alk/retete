import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/sidebar";
import CategoryIndex from "../components/category/index";
import CategoryCreate from "../components/category/create";
import NotFound from "../not-found";
import CategoryEdit from "../components/category/edit";
import RecipeCreate from "../components/recipe/create";
import RecipeList from "../components/recipe/list";
import RecipeEdit from "../components/recipe/edit";
import Login from "../pages/Login";
import Auth from "../Auth";
import Register from "../pages/Register";
import * as apiCalls from "../api/apiCalls";
import AdminHome from "../pages/AdminHome";

function App() {
  const actions = {
    register: apiCalls.register,
    postLogin: apiCalls.login,
  };

  // if (Auth.isAuthenticated) {
  //   // todo: add !
  //   return (
  //     <div>
  //       <Navbar />
  //       {window.location.pathname !== "/admin/register" && (
  //         <Redirect to="/admin/login" />
  //       )}
  //       <Switch>
  //         <Route exact path="/admin/login">
  //           <Login actions={actions} />
  //         </Route>
  //         <Route exact path="/admin/register">
  //           <Register actions={actions} />
  //         </Route>
  //       </Switch>
  //     </div>
  //   );
  // }
  return (
    <div>
      <Navbar />
      {window.location.pathname !== "/admin/login" && <Sidebar />}
      <Switch>
        {
          // todo: remove this
        }
        <Route
          exact
          path="/admin/register"
          component={(props) => <Register {...props} actions={actions} />}
        />
        <Route exact path="/admin/home" component={AdminHome} />
        <Route
          exact
          path="/admin/login"
          component={(props) => <Login {...props} actions={actions} />}
        />

        <Route exact path="/admin/categories" component={CategoryIndex} />
        <Route
          exact
          path="/admin/categories/create"
          component={CategoryCreate}
        />
        <Route
          exact
          path="/admin/categories/:id/edit"
          component={CategoryEdit}
        />
        <Route exact path="/admin/recipes" component={RecipeList} />
        <Route exact path="/admin/recipes/create" component={RecipeCreate} />
        <Route exact path="/admin/recipes/:id/edit" component={RecipeEdit} />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
