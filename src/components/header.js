import { useState } from "react";
import NavBar from "./navbar";
import Uzbmapsvg from "./uzbmapsvg";
import YolStatistika from "./yolStatistika";
import { CountRespublicRoad } from "./assetsComponents/countRegionsRoad";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import "../styles/header.css";

function Header() {
  const [regionRoadLength, setRegionRoadLength] = useState(
    CountRespublicRoad()
  );

  const duration = 1000;

  return (
    <div
      className="header w-100 d-flex flex-column overflow-hidden"
      id="header"
    >
      <NavBar />
      <div className="headerContainer">
        <div className="malumotCont d-flex flex-column w-25">
          <h2
            className="malumot"
            data-aos="fade-right"
            data-aos-duration={duration}
            data-aos-delay="1000"
          >
            O'zbekiton Respublikasi yo'llari haqida ma'lumot olishni istaysizmi?
          </h2>
          <h4
            className="py-3"
            data-aos="fade-right"
            data-aos-duration={duration}
            data-aos-delay="1200"
          >
            Viloyatingizni tanlang.
          </h4>
        </div>
        <div className="map">
          <div className="statCont d-flex align-items-center justify-content-center">
            <YolStatistika roadLength={regionRoadLength} />
          </div>
          <Uzbmapsvg
            duration={duration}
            changeRoadLength={(roadLength) => {
              setRegionRoadLength(roadLength);
            }}
          />
        </div>
      </div>
      <div className="messengers">
        <FaTelegram
          className="fs-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1600"
        />
        <FaInstagram
          className="fs-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1800"
        />
        <FaFacebook
          className="fs-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        />
        <FaTwitter
          className="fs-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2200"
        />
      </div>
    </div>
  );
}

export default Header;
