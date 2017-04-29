import React, { PropTypes } from "react"

import Page from "../Page"
import LatestPosts from "../../components/LatestPosts"

const Posts = (props) => {
    // it's up to you to choose what to do with this layout ;)
    const pageDate = props.head.date
        ? new Date(props.head.date)
        : null

    return (
        <div>
            <Page subtitle={pageDate} { ...props } >
                <LatestPosts numberOfPosts={6} />
            </Page>
        </div >

    )
}

Posts.propTypes = {
    head: PropTypes.object.isRequired
}

export default Posts
