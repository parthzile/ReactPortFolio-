import { useState, useEffect } from "react";
import styles from "./Animation.module.css"
import content from "../content.json";

const Animation = () => {
  const [textIndex, ] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const dataText = content.landingSection.titleTwo;
    const typeWriter = (text, i, fnCallback) => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === "function") {
        setTimeout(fnCallback, 700);
      }
    };

    const startTextAnimation = (i) => {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          setTimeout(() => {
            startTextAnimation(i + 1);
          }, 2000); // Delay before starting the next text
        });
      } else {
        setTimeout(() => {
          startTextAnimation(0); // Restart animation loop
        }, 20000); // Delay before restarting the animation loop
      }
    };

    startTextAnimation(textIndex);

    return () => {
      // Clean up any ongoing animations or timers if the component unmounts
    };
  }, [textIndex]);

  return (
    <p className={styles.h1}>
      {displayText}
      <span className={styles.span}></span>
    </p>
  );
};

export default Animation;
