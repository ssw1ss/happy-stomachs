const path = require("path")
const slugify = require("@sindresorhus/slugify")
const createPaginatedPages = require("gatsby-paginate")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ui: path.resolve(__dirname, "src/ui"),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  try {
    const { data } = await graphql(`
      query Posts {
        allPrismicPost {
          nodes {
            id
            first_publication_date
            tags
            data {
              feature_image {
                fluid(maxWidth: 1000, maxHeight: 800) {
                  ...GatsbyPrismicImageFluid
                }
              }
              body {
                ... on PrismicPostBodyRecipe {
                  primary {
                    recipe_title {
                      text
                    }
                  }
                }
              }
              content {
                text
              }
              title {
                text
              }
            }
          }
        }
      }
    `)
    createPaginatedPages({
      edges: data.allPrismicPost.nodes,
      createPage: createPage,
      pageTemplate: "src/templates/posts.js",
      pageLength: 5, // This is optional and defaults to 10 if not used
      pathPrefix: "",
      buildPath: (index, pathPrefix) => (index < 1 ? `/` : `/page-${index}`),
    })
    data.allPrismicPost.nodes.forEach(post => {
      createPage({
        path: `/posts/${slugify(post.data.title.text)}`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  } catch (err) {
    console.log("u fucked up: ", err)
  }
}
