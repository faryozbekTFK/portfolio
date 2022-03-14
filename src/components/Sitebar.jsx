import userImage from "../assets/images/userImage.png";
import { MdOutlineLanguage } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { GiGameConsole } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { HiMusicNote } from "react-icons/hi";

import "../assets/styles/sitebar.css";

function Sitebar() {
  const Education = ({ year, name }) => {
    return (
      <div className="education">
        <h5 className="fw-light mt-3">{year}</h5>
        <h5>{name}</h5>
      </div>
    );
  };

  const Language = ({ name, know }) => {
    return (
      <div className="language">
        <h5 className="mt-4">
          <MdOutlineLanguage className="fs-4 me-3 text-warning" /> {name}
        </h5>
        <div
          className="line bg-warning"
          style={{ width: `${know}px`, height: "5px" }}
        />
      </div>
    );
  };

  const Hobby = ({ icon }) => {
    return (
      <span className="hobbyIcon" style={{ fontSize: "100px" }}>
        {icon}
      </span>
    );
  };

  return (
    <div className="sitebar">
      <div className="imageCircle">
        <div className="minCir" />
        <div className="minCir" />
      </div>
      <img src={userImage} alt="User Image" />

      <div className="title w-75 mt-5 pt-5">
        <h1 className="text-warning fw-bold mb-4">EDUCATION</h1>
        <h5 className="fs-4 fw-light pe-5 me-5">
          <Education year="2007 - 2008" name="22th Comprehensive school" />
          <Education year="2008 - 2016" name="48th State Specialized school" />
          <Education year="2016 - 2019" name="Academic Lyseum" />
          <Education
            year="2019 - 2023"
            name="Tashkent Univeristy Of Information Technologies"
          />
        </h5>
      </div>

      <div className="title w-75 mt-4 pt-5">
        <h1 className="text-warning fw-bold mb-4">LANGUAGE</h1>
        <Language name="Uzbek" know={70} />
        <Language name="Russian" know={35} />
        <Language name="English" know={30} />
      </div>

      <div className="title w-75 mt-4 pt-5">
        <h1 className="text-warning fw-bold mb-4">HOBBIES</h1>
        <div className="hobbies d-flex justify-content-between mt-3">
          <Hobby icon={<SiYourtraveldottv />} />
          <Hobby icon={<GiGameConsole />} />
        </div>
        <div className="hobbies d-flex justify-content-between mt-3">
          <Hobby icon={<FaCode />} />
          <Hobby icon={<HiMusicNote />} />
        </div>
      </div>
    </div>
  );
}

export default Sitebar;
