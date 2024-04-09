import navbar from "./Navbar.module.css";
import content from "../content.json";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <FaFileImage style={{ color: "#CECECE", fontSize: "20px" }} />
      </div>
      <div className={navbar.navbar}>
        <div className={navbar.links}>
          {content.navLinks.map((ele, index) => {
            return (
              <div key={index}>
                {ele.charAt(0).toUpperCase() + ele.slice(1)}
              </div>
            );
          })}
        </div>
      </div>
      <div className={navbar.social}>
        <BsTwitterX style={{ color: "#CECECE", fontSize: "20px" }} />
        <FaGithub style={{ color: "#CECECE", fontSize: "20px" }} />
        <FaLinkedin style={{ color: "#CECECE", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Navbar;
