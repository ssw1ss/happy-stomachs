/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import slugify from "@sindresorhus/slugify"
import dateFormat from "dateformat"

import { Button, Box, Flex, Link, Text } from "ui"
import Layout from "../components/layout"
import PostHead from "../components/PostHead"
import SEO from "../components/seo"
import Section from "../components/Section"

const postSx = {
  py: 5,
  borderBottom: theme => `3px solid ${theme.colors.lightGreen}`,
  "&:last-child": {
    borderBottom: "none",
  },
}

const Post = ({ pageContext }) => {
  const posts = pageContext.group.map(post => {
    const title = post.data.title.text
    const recipe = post.data.body.length > 0
    const slug = `/posts/${slugify(title)}`
    const tags = post.tags.join(", ")
    console.log("img: ", post.data)
    let date = new Date(post.first_publication_date)
    date = dateFormat(date, "mmm dS, yyyy")
    return (
      <Box key={post.id} sx={postSx}>
        <PostHead title={title} slug={slug} tags={tags} date={date} />
        <Text
          as="p"
          sx={{ fontSize: "1.1rem" }}
          dangerouslySetInnerHTML={{
            __html: `${post.data.content.text.slice(0, 450)} ...`,
          }}
        />
        <Flex sx={{ alignItems: "center", mt: 4 }}>
          <Button>
            <Link to={slug} sx={{ variant: "blank" }}>
              Read More
            </Link>
          </Button>
          {recipe && (
            <>
              <Text variant="label" sx={{ fontSize: 0, mx: 3 }}>
                OR
              </Text>
              <Link to={`${slug}#recipe`} sx={{ variant: "links.underline" }}>
                Skip To Recipe (
                {recipe && post.data.body[0].primary.recipe_title.text})
              </Link>
            </>
          )}
        </Flex>
      </Box>
    )
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Section pb={6}>{posts}</Section>
    </Layout>
  )
}

export default Post
