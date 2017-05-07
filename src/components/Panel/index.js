import React, { PropTypes } from "react"
import styles from "./index.css"

const Panel = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.panelTitle}>{props.title}</div>
            <hr className={styles.titleDivider} />
            <div className={styles.panelContent}>{props.children}</div>
        </div>
    );
}

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,


}

export default Panel
