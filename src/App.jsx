import  styles from "./App.module.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";

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
        </div>
      </div>
    </>
  );
}

export default App;
