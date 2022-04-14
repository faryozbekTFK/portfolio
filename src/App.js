import Header from "./components/Header";
import Sitebar from "./components/Sitebar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <Header />
        <Sitebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
