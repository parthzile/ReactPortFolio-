import Navbar from "../../components/Navbar/Navbar"
import AboutMeLanding from "../../components/AboutMeLanding/AboutMeLanding"
import styles from "./AboutMePage.module.css"


export const AboutMePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Navbar />
        </div>

        <div className={styles.rightContainer}>
          <AboutMeLanding />
        </div>
      </div>
    </>
  )
}
