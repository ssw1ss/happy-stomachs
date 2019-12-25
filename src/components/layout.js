import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"
import { Global } from "@emotion/core"

import { Box } from "ui"
import Header from "./header"
import globalCSS from "./globalCSS"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalCSS} />
      <Styled.root>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Styled.root>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
