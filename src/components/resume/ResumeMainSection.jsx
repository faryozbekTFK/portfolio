import { BsFillTelephoneFill, BsBootstrapFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane, FaGithubSquare } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import {
  IoHome,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import "../../assets/styles/resumeMainSection.css";

function ResumeMainSection() {
  const SkillsProg = ({ icon, name, link }) => {
    return (
      <a
        href={link}
        className="skills d-flex flex-column align-items-center text-decoration-none text-dark"
      >
        <span style={{ fontSize: "100px" }}>{icon}</span>
        <h5>{name}</h5>
      </a>
    );
  };

  return (
    <div className="resMain">
      <h1 className="fullName">
        FARYOZBEK <span className="text-warning">TO'XTASINOV</span>
      </h1>
      <h4>FRONTEND DEVELOPER</h4>
      <div className="contacts d-flex mt-5">
        <div className="rectangle">
          <BsFillTelephoneFill className="icons" />
          <FaTelegramPlane className="icons" />
          <MdEmail className="icons" />
          <IoHome className="icons" />
        </div>
        <div className="contact">
          <h2>
            <a href="tel: +998 90 918 13 43">90 918 13 43</a>
          </h2>
          <h2>
            <a href="http://t.me/FaToKom_TFK">FaToKom_TFK</a>
          </h2>
          <h2>
            <a href="https://mail.google.com/mail/u/0/?tab=rm#sent?compose=CllgCJlJWKxHjxLCnPKLjDQfSKsnQjQXDLGDlhqVbNDJTzjrdjPngFwKvMLHpqgqgFzHLJTkLZg">
              t.faryozbek1311@gmail.com
            </a>
          </h2>
          <h2>
            <a href="https://goo.gl/maps/maTwN19EeGgz7gw5A">
              Toshkent shahar, Yunusobod tumani
            </a>
          </h2>
        </div>
      </div>

      {/* profile */}
      <div className="title mt-5 pt-3 pb-5">
        <h1 className="text-warning fw-bold mb-4">PROFILE</h1>
        <h5 className="fs-4 fw-light pe-5 me-5">
          I was born on November 13, 2000 in Boz District of Andijan region. I'm
          21 years old. I'm a boy. I am interested in programming.
        </h5>
      </div>

      {/* experience */}
      <div className="title mt-5 pt-3 pb-5">
        <h1 className="text-warning fw-bold mb-4">EXPERIENCE</h1>
        <h5 className="fs-3 fw-bolder">FRONTEND DEVELOPER - 2021</h5>
        <h5 className="fs-4 ">RoboticsLab Training Center</h5>
        <h5 className="fs-4 fw-light pe-5 me-5">
          I worked on several projects on the Frontend at the RoboticsLab
          training center.
        </h5>
      </div>

      {/* skills */}
      <div className="title mt-5 pt-3 pb-5">
        <h1 className="text-warning fw-bold mb-4">SKILLS</h1>
        <div className="d-flex w-100 pe-5 me-5 mt-2 justify-content-between">
          <SkillsProg
            icon={<IoLogoHtml5 />}
            name="HTML"
            link="https://www.w3schools.com/html"
          />
          <SkillsProg
            icon={<IoLogoCss3 />}
            name="CSS"
            link="https://www.w3schools.com/css"
          />
          <SkillsProg
            icon={<BsBootstrapFill />}
            name="Bootstrap"
            link="https://www.w3schools.com/bootstrap"
          />
          <SkillsProg
            icon={<IoLogoJavascript />}
            name="Java Script"
            link="https://www.w3schools.com/js"
          />
        </div>
        <div className="d-flex w-100 pe-5 me-5 mt-2 justify-content-evenly">
          <SkillsProg
            icon={<RiReactjsLine />}
            name="ReactJS"
            link="https://www.w3schools.com/react"
          />
          <SkillsProg
            icon={<AiFillApi />}
            name="Rest API"
            link="https://www.redhat.com/en/topics/api/what-is-a-rest-api"
          />
          <SkillsProg
            icon={<FaGithubSquare />}
            name="Git"
            link="https://github.com"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeMainSection;
