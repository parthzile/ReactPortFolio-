import styles from "./Intro.module.css";
import content from "../content.json";

const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <h2 className={styles.titleOne}>{content.intro.delegation}</h2>
        <p className={styles.description}>{content.intro.introduction}</p>
      </div>
      <div className={styles.creative}></div>
      
    </div>
  );
};

export default Intro;
