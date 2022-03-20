import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Nabvar";
import Header from "./components/Header";
import Sitebar from "./components/Sitebar";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div className="d-flex">
                <Header />
                <Sitebar />
              </div>
            );
          }}
        />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
