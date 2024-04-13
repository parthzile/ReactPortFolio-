import styles from "./About.module.css";
import content from "../content.json";
import { FaArrowRight } from "react-icons/fa";
import HindiText from "../HindiText/HindiText";
import video from "../../assets/notfound.mp4";


const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.srNo}>{content.aboutMe.srNo}</p>
        <h2 className={styles.titleOne}>{content.aboutMe.titleOne}</h2>
        <p className={styles.description}>{content.aboutMe.description}</p>

        <button className={styles.button}>
          {content.aboutMe.button}
          <span className={styles.buttonIcon}>
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className={styles.creative}>
      <div className={styles.videoDiv}>
          <video autoPlay loop className={styles.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <HindiText text="aboutMe"/>
      </div>
    </div>
  );
};

export default AboutMe;
