import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/sidebar";
import CategoryIndex from "../components/category/index";
import CategoryCreate from "../components/category/create";
import NotFound from "../not-found";
import CategoryEdit from "../components/category/edit";
import RecipeCreate from "../components/recipe/create";
import RecipeList from "../components/recipe/list";
import RecipeEdit from "../components/recipe/edit";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import setJWTToken from "../securityUtils";
import { useSelector, useStore } from "react-redux";
import jwt_decode from "jwt-decode";

const jwtToken = localStorage.getItem("jwt");

function App() {
  const store = useStore();
  if (jwtToken) {
    setJWTToken(jwtToken);
    const decode_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
      type: "login-success",
      payload: decode_jwtToken,
    });

    const currentTime = Date.now() / 1000;
    if (decode_jwtToken.exp < currentTime) {
      store.dispatch("logout");
      window.location.href = "/admin/login";
    }
  }

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <div>
        <Navbar />
        {location.pathname !== "/admin/register" && (
          <Redirect to="/admin/login" />
        )}
        <Switch>
          <Route exact path="/admin/login">
            <Login />
          </Route>
          <Route exact path="/admin/register">
            <Register />
          </Route>
        </Switch>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      {window.location.pathname !== "/admin/login" && <Sidebar />}
      <Switch>
        <Route exact path="/admin/home" component={AdminHome} />
        <Route exact path="/admin/register" component={AdminHome} />

        <Route exact path="/admin/login" component={Login} />

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
