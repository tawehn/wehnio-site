import React, {PropTypes} from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from './index.css';

//import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, {collection}) => {
    const latestPosts = enhanceCollection(collection, {
        filter: {
            layout: "Post"
        },
        sort: "date",
        reverse: true
    }).slice(0, props.numberOfPosts || defaultNumberOfPosts)

    return (
        <div className={ styles.wrapper}>
            <PagesList pages={latestPosts}/>
        </div>
    )
}

LatestPosts.propTypes = {
    numberOfPosts: PropTypes.number
}

LatestPosts.contextTypes = {
    collection: PropTypes.array.isRequired
}

export default LatestPosts
