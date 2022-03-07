import Header from "./components/Header";
import Sitebar from "./components/Sitebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Sitebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
