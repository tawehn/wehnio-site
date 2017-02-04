import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <div className={ styles.list }>
          {
          pages.map((page) => (
            <div className={styles.listItem}>
              <PagePreview { ...page } />
            </div>
          ))
        }
        </div>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
