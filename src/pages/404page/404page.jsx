import  styles from "./404page.module.css";
import PagenotfoundComponent from "../../components/404component/PagenotfoundComponent";
import Navbar from "../../components/Navbar/Navbar"

function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Navbar />
        </div>

        <div className={styles.rightContainer}>
          <PagenotfoundComponent  />
        </div>
      </div>
    </>
  );
}

export default Page;
