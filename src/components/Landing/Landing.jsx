import styles from "./Landing.module.css";
import content from "../content.json";
import Animation from "../Animation/Animation";

const name = content.landingSection.name.toUpperCase();
const titleOne = content.landingSection.titleOne;
// const titleTwo = content.landingSection.titleTwo;

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.name}>{name}</div>
      <div className={styles.titleContainer}>
        <div className={styles.titleOne}>{titleOne}</div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.titleTwo}>
        <span className={styles.addSign}>+</span> <Animation />
      </div>

      <span className={styles.scrollbtn}>
        <span className={styles.mouse}>
          <span></span>
        </span>
      </span>
    </div>
  );
};

export default Landing;
