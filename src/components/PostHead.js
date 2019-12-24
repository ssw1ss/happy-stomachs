/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Heading, Flex, Link, Text } from "ui"

const PostHead = ({ date, slug, tags, title }) => {
  const heading = slug ? <Link to={slug}>{title}</Link> : title
  const tagsContent = tags ? (
    <Text variant="label" sx={{ mt: 2, mb: 3 }}>
      🏷{tags}
    </Text>
  ) : null
  return (
    <>
      <Heading as="h1" variant="h1">
        {heading}
      </Heading>
      <Flex>
        <Text variant="label" sx={{ mt: 2, mb: 3, mr: 3 }}>
          🗓Posted {date}
        </Text>
        {tagsContent}
      </Flex>
    </>
  )
}

export default PostHead
