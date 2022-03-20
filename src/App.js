import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import MapPage from "./components/mapPage";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mapPage" component={MapPage} />
    </Switch>
  );
}

export default App;
