import styles from "./About.module.css";
import content from "../content.json";
import { FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.srNo}>{content.aboutMe.srNo}</p>
        <h2 className={styles.titleOne}>{content.aboutMe.titleOne}</h2>
        <p className={styles.description}>{content.aboutMe.description}</p>

        <button className={styles.button}>
          {content.aboutMe.button}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className={styles.creative}></div>
    </div>
  );
};

export default AboutMe;