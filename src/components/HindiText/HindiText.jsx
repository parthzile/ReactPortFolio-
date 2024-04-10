import content from "../content.json"
import styles from "./HindiText.module.css"
// eslint-disable-next-line react/prop-types
const HindiText = ({text}) => {
    return (
        <>
            <p className={styles.bgText}>{content.hindText[text]}</p>
        </>
    )
}


export default HindiText