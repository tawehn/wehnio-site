import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p className={styles.footerText}>
      Site generated with Phenomic / Hosted on Amazon S3
    </p>
  </footer>
)

export default Footer
