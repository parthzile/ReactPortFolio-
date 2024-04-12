import styles from "./PagenotfoundComponent.module.css";
import content from "../content.json";
import { FaArrowRight } from "react-icons/fa";
import HindiText from "../HindiText/HindiText";

const PagenotfoundComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.srNo}>404</p>
        <h2 className={styles.titleOne}>ERROR: REDACTED</h2>
        <p className={styles.description}>
          This page could not be found. It either doesn’t exist or was deleted.
          Or perhaps you don’t exist and this webpage couldn’t find you.
        </p>

        <button className={styles.button}>
          {content.aboutMe.button}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className={styles.creative}>
        <HindiText text="aboutMe" />
      </div>
    </div>
  );
};

export default PagenotfoundComponent;
