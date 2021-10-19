import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import CategoryIndex from "./components/category/index";
import CategoryCreate from "./components/category/create";
import NotFound from "./not-found";

function App() {
	
  return (
	<Router>
	    <div>
	      
		<Switch>
		  <Route path='/admin/category/create'>
<Navbar />
		  <Sidebar />
<CategoryCreate />
		  </Route>
		  <Route component={NotFound} />
</Switch>
	    </div>
    </Router>
  );
}

export default App;
