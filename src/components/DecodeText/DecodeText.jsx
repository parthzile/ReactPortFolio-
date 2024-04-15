import  { useState, useEffect } from 'react';
import styles from "./DecodeText.module.css"

// eslint-disable-next-line react/prop-types
const DecodeText = ({ name }) => {
  const [letters] = useState("कखगघड़चछजझञटठडढणतथदधनपफबभमयरलवशषसह");
  // eslint-disable-next-line no-unused-vars
  const [intervalId, setIntervalId] = useState(null);
  const [text, setText] = useState(name);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setText(prevText => prevText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 33)];
        })
        .join("")
      );

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 45);

    // setIntervalId(newIntervalId);
  };

  useEffect(() => {
    handleMouseOver();

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [intervalId]); 

  return (
    <h1 className={styles.name} >
      {text}
    </h1>
  );
};

export default DecodeText;
