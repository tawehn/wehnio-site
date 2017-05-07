import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import Panel from "../../components/Panel"

const Homepage = (props) => {
  return (
    <div>
    <Page { ...props }>
    </Page>
        <Panel title="Recent Posts">
          <LatestPosts numberOfPosts={2} />
        </Panel>
    </div>

  )
}

export default Homepage
