import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <div>

    <Page { ...props }>
    
    <LatestPosts numberOfPosts="2" />

    </Page>
    </div>

  )
}

export default Homepage
