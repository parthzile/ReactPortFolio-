import  styles from "./App.module.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import PastExp from "./components/PastExp/PastExp"
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Navbar />
        </div>

        <div className={styles.rightContainer}>
          <Landing />
          <AboutMe />
          <PastExp />
          <Intro />
        </div>
      </div>
    </>
  );
}

export default App;
