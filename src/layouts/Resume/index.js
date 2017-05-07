import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import Page from "../Page"

import ListPanel from "../../components/ListPanel"

import styles from "./index.css"

const Resume = (props) => {
  return (
    <div>
      <Page { ...props } customPageContent={true}>
        <div className={styles.resumeContainer}>
          <div className={styles.skillSection}>
            <div className={styles.skillCard}><ListPanel title="Languages" items={props.head.languages.split(',').sort()}></ListPanel></div>
            <div className={styles.skillCard}><ListPanel title="Frameworks" items={props.head.frameworks.split(',').sort()}></ListPanel></div>
            <div className={styles.skillCard}><ListPanel title="Tools" items={props.head.tools.split(',').sort()}></ListPanel></div>
          </div>
          <div className={styles.workExperience}>
            <BodyContainer>{props.body}</BodyContainer>
          </div>
        </div>

      </Page>
    </div>

  )
}

Resume.propTypes = {
  body: PropTypes.string.isRequired,
  head: PropTypes.object
}

export default Resume
