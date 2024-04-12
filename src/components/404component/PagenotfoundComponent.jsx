import styles from "./PagenotfoundComponent.module.css";
import content from "../content.json";
import HindiText from "../HindiText/HindiText";
import video from "../../assets/notfound.mp4";
// import {Link} from 'react-router-dom'

const PagenotfoundComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.srNo}>{content["404page"]["404error"]}</p>
        <h2 className={styles.titleOne}>{content["404page"]["404title"]}</h2>
        <p className={styles.description}>
          {content["404page"]["404description"]}
        </p>
        <button className={styles.button}>
          <a href="/">{content["404page"]["404button"]}</a>
        </button>
      </div>

      <div className={styles.creative}>
        <div className={styles.videoDiv}>
          <video autoPlay loop className={styles.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <HindiText text="404Route" />
      </div>
    </div>
  );
};

export default PagenotfoundComponent;
