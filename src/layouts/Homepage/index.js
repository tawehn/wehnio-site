import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <div>

    <Page { ...props }>
    

    </Page>
        <LatestPosts numberOfPosts="2" />

    </div>

  )
}

export default Homepage
