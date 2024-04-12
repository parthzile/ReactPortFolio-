import styles from "./AboutMeLanding.module.css";
import content from "../content.json";
// import DecodeText from "../DecodeText/DecodeText"

// const title = content.aboutmePage.title

const AboutMeLanding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{content.aboutmePage.title}</p>
        <p className={styles.description}>{content.aboutmePage.description}</p>
      </div>
      <div className={styles.creative}>
    
      </div>
    </div>
  );
};

export default AboutMeLanding;
