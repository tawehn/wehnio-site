import React, { PropTypes } from "react"
import Panel from "../Panel"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={styles.wrapper}>
      <Panel title={title}>
        <div className={styles.meta}>
          {
            pageDate &&
            <time key={pageDate.toISOString()}>
              {pageDate.toDateString()}
            </time>
          }
        </div>
        <div className={styles.description}>
          {description}
          {" "}
        </div>

        <Link to={__url} className={styles.readMore}>
          <Button secondary>{"Read More →"}</Button>
        </Link>
      </Panel>

    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
