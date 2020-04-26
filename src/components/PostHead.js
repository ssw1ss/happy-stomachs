/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"

import { Heading, Box, Link, Text } from "ui"

const PostHead = ({ date, slug, tags, title, img }) => {
  const heading = slug ? <Link to={slug}>{title}</Link> : title
  const tagsContent = tags ? (
    <Text variant="label" sx={{ mt: 2, mb: 3, display: "inline" }}>
      🏷{tags}
    </Text>
  ) : null
  console.log("IMAGE: ", img)
  return (
    <>
      <Heading as="h1" variant="h1">
        {heading}
      </Heading>
      {img && <Img fluid={img.fluid} />}
      <Box>
        <Text variant="label" sx={{ mt: 2, mb: 3, mr: 3, display: "inline" }}>
          🗓Posted {date}
        </Text>
        {tagsContent}
      </Box>
    </>
  )
}

export default PostHead
