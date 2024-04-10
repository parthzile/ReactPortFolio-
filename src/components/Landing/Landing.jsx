import styles from "./Landing.module.css";
import content from "../content.json";
import Animation from "../Animation/Animation";
import { useState,useEffect } from "react";

const name = content.landingSection.name.toUpperCase();
const titleOne = content.landingSection.titleOne;

const Landing = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const shouldFade = scrollTop > 100; // Adjust the scroll position threshold as needed

          setIsVisible(!shouldFade);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

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

      <div className={`${styles.scrollbtn} ${isVisible ? '' : styles['fade-out']}`}>
            <div className={styles.mouse}>
                <div></div>
            </div>
        </div>
    </div>
  );
};

export default Landing;
