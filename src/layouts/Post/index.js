import React, {PropTypes} from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const Post = (props) => {
    // it's up to you to choose what to do with this layout ;)
    const pageDate = props.head.date
        ? new Date(props.head.date)
        : null

    return (
        <Page { ...props } header={< div > <header className={styles.header}>
            {pageDate && <h5 key={pageDate.toISOString()}>
                {pageDate.toDateString()}
            </h5>}
        </header> < /div>}>
            <hr/>
            <LatestPosts/>
        </Page>
    )
}

Post.propTypes = {
    head: PropTypes.object.isRequired
}

export default Post
