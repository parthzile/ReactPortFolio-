import styles from "./AboutMe.module.css"
import content from "../content.json"
const AboutMe = () => {

    return(
        <>
            <p className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.titleOne}>{content.aboutMe.titleOne}</p>
                </div>

                <div className={styles.creative}>
                    <p>Image</p>
                </div>
            </p>
        </>
    )

}

export default AboutMe