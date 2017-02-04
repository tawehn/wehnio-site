import React, { PropTypes } from "react"

import styles from "./index.css"

const PageTitle = (props) => {
return (
  <div className={ styles.header }>
    <h1 className={ styles.heading }>{ props.title }</h1>
    <small className={ styles.headingSubtitle }>{ props.subtitle }</small>
  </div>
);
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,

}

export default PageTitle
