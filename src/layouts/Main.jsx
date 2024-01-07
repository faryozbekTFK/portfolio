import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Main() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="section-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
