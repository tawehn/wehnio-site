import React, { PropTypes } from "react"
import styles from "./index.css"

const PageTitle = (props) => {
  return (
    <div className={styles.header}>
      <div className={[styles.bar, styles.barLeft].join(' ')}></div>
      <div className={[styles.bar, styles.barRight].join(' ')}></div>
      <h1 className={styles.heading}>{props.title}</h1>
      <span className={styles.headingSubtitle}>{props.subtitle}</span>
    </div>




  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,

}

export default PageTitle
