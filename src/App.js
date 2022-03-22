import { Route } from "react-router-dom";
import Header from "./components/Header";
import Sections from "./components/Sections";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appCont">
        <Route path="/" exact component={Header} />
        <Route path="/section" component={Sections} />
      </div>
    </div>
  );
}

export default App;
