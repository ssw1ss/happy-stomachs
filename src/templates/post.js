import React from "react"
import { graphql } from "gatsby"

import { Box, Text } from "ui"
import Layout from "../components/layout"
import PostHead from "../components/PostHead"
import Recipe from "../components/Recipe"
import Section from "../components/Section"

const postSx = {
  pt: 5,
  borderBottom: theme => `1px solid ${theme.colors.lightGreen}`,
  "&:last-child": {
    borderBottom: "none",
  },
}
const postContentSx = {
  fontSize: "1.1rem",
  "& a": {
    color: "green",
    borderBottom: theme => `2px solid ${theme.colors.primary}`,
    textDecoration: "none",
    transition: "opacity .2s",
    opacity: ".9",
    "&:hover": {
      opacity: "1",
    },
  },
}

const post = ({ data }) => {
  const tags = data.prismicPost.tags.join(", ")
  const date = new Date(
    data.prismicPost.first_publication_date
  ).toLocaleDateString()
  const post = data.prismicPost.data
  const title = post.title.text
  const img = post.hasOwnProperty("feature_image") ? post.feature_image : null
  let recipe = false
  if (post.body.length > 0) {
    recipe = post.body[0].primary
  }
  return (
    <Layout>
      <Section>
        <Box sx={postSx}>
          <PostHead title={title} tags={tags} date={date} img={img} />
          <Text
            sx={postContentSx}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </Box>
      </Section>
      {recipe && <Recipe recipe={recipe} />}
    </Layout>
  )
}

export default post

export const query = graphql`
  query Post($id: String!) {
    prismicPost(id: { eq: $id }) {
      first_publication_date
      tags
      data {
        content {
          html
        }
        title {
          text
        }
        feature_image {
          fluid(maxHeight: 10, maxWidth: 10) {
            ...GatsbyPrismicImageFluid
          }
        }
        body {
          ... on PrismicPostBodyRecipe {
            primary {
              recipe_title {
                text
              }
              serves {
                text
              }
              prep_time {
                text
              }
              cook_time {
                text
              }
              total_time {
                text
              }
              ingredients {
                html
              }
              instructions {
                html
              }
            }
          }
        }
      }
    }
  }
`
