import styles from "./Intro.module.css";
import content from "../content.json";
import HindiText from "../HindiText/HindiText";
import video from "../../assets/intro.mp4";
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.titleOne}>{content.intro.delegation}</h2>
        <p className={styles.description}>{content.intro.introduction}</p>
      </div>
      <div className={styles.creative}>
      <div className={styles.videoDiv}>
          <video autoPlay loop className={styles.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <HindiText text="whoAmI"/>
      </div>
    </div>
  );
};

export default Intro;
