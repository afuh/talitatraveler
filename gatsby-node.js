const path = require(`path`)
const slugify = require('@sindresorhus/slugify')

const redirects = require('./config/redirects')

exports.createPages = ({ graphql, reporter, actions: { createPage, createRedirect } }) => {
  const allCategories = []
  const template = {
    post: path.resolve('src/templates/post.js'),
    category: path.resolve('src/templates/category.js'),
    allCategories: path.resolve('src/templates/allCategories.js'),
  }

  Object.keys(redirects).forEach((from) => {
    const to = redirects[from]

    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
      redirectInBrowser: true,
    })

    reporter.info(`Redirect: ${from} -> ${to}`)
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allContentfulPost(sort: { fields: date, order: DESC }) {
              edges {
                node {
                  slug
                  categories
                }
              }
            }
          }
        `,
      ).then((res) => {
        if (res.errors) {
          console.log(res.errors)
          reject(res.errors)
        }

        res.data.posts.edges.forEach(({ node: { slug, categories } }) => {
          // Create post page
          createPage({
            path: `/${slug}`,
            component: template.post,
            context: {
              slug,
              categories,
            },
          })

          // group all Categories
          categories.forEach((category) => {
            if (!allCategories.filter((cat) => cat === category).length) {
              allCategories.push(category)
            }

            // Create category page
            createPage({
              path: `/categorias/${slugify(category)}`,
              component: template.category,
              context: {
                category,
              },
            })

            // create a category index
            createPage({
              path: '/categorias',
              component: template.allCategories,
              context: {
                allCategories,
              },
            })
          })
        })
      }),
    )
  })
}
