import { Link } from "react-router-dom";
import myPicture from "../assets/images/myPicture.png";
import logo from "../assets/images/logo.png";
import {
  FaTelegram,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import "../assets/styles/header.css";

function Header() {
  return (
    <div className="vh-100 header ">
      <div className="headerCont">
        <div className="headCont">
          <div className="leftHead ">
            <div className="menu">
              <img src={logo} alt="logo" />
              <Link to="/" className="h4 ">
                Home
              </Link>
              <Link to="/section/portfolio" className="h4 ">
                Portfolio
              </Link>
              {/* <Link to="/section/about" className="h4 ">
                About
              </Link> */}
              <Link to="/section/cv" className="h4 ">
                CV
              </Link>
            </div>

            <div>
              <h1>
                FARYOZBEK <span className="text-warning">TO'XTASINOV</span>
              </h1>
              <h3>FRONTEND DEVELOPER</h3>
            </div>
            <div className="contact">
              <a href="https://t.me/FaToKom_TFK">
                <FaTelegram />
              </a>
              <a href="https://instagram.com/faryozbektfk">
                <FaInstagramSquare />
              </a>
              <a href="https://www.facebook.com/t.faryozbek/">
                <FaFacebook />
              </a>
              <a href="https://github.com/faryozbekTFK">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="rightHead">
            <img src={myPicture} alt="myPicture" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
