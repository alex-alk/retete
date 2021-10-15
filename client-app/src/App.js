import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div>
      <Navbar />
	  <Sidebar />
    </div>
  );
}

export default App;
