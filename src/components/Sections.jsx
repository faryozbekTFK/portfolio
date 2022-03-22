import { Switch, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import NavBar from "./Nabvar";
import Portfolio from "./Portfolio";
import Resume from "./resume/Resume";

function Sections() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/section/portfolio" exact component={Portfolio} />
        <Route path="/section/about" component={About} />
        <Route path="/section/cv" component={Resume} />
      </Switch>
      <Footer />
    </>
  );
}

export default Sections;
