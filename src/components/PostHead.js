/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import dateFormat from "dateformat"

import { Heading, Box, Link, Text } from "ui"

const PostHead = ({ date, slug, tags, title, img }) => {
  const heading = slug ? <Link to={slug}>{title}</Link> : title
  const tagsContent = tags ? (
    <Text variant="label">🏷 Tagged under {tags}</Text>
  ) : null
  const formattedDate = dateFormat(Date.parse(date), "mmm dS, yyyy")
  console.log("IMAGE: ", img)
  return (
    <>
      <Heading as="h1" variant="h1" mb={2}>
        {heading}
      </Heading>
      {img && (
        <Box mb={3}>
          <Img fluid={img.fluid} />
        </Box>
      )}
      <Box mb={4} sx={{ lineHeight: "1.2" }}>
        <Box sx={{ my: 3 }}>{tagsContent}</Box>
        <Box sx={{ my: 3 }}>
          <Text variant="label" sx={{ mt: 2, mb: 3, mr: 3, display: "inline" }}>
            🗓 Posted {formattedDate}
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default PostHead
