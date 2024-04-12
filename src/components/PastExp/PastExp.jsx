import styles from "./PastExp.module.css";
import content from "../content.json";
import { FaArrowRight } from "react-icons/fa";
import HindiText from "../HindiText/HindiText";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.creative}>
        <HindiText text="experience"/>
      </div>
      <div className={styles.content}>
        <p className={styles.srNo}>{content.pastExp.srNo}</p>
        <h2 className={styles.titleOne}>{content.pastExp.titleOne}</h2>
        <p className={styles.description}>{content.pastExp.description}</p>

        <button className={styles.button}>
          {content.pastExp.button}
          <span className={styles.buttonIcon}>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
