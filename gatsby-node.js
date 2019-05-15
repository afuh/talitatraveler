const path = require(`path`)
const { toSlug } = require('./config/sharedUtils')

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const allCategories = []
  const template = {
    post: path.resolve('src/templates/post.js'),
    category: path.resolve('src/templates/category.js'),
    allCategories: path.resolve('src/templates/allCategories.js')
  }

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allContentfulPost {
              edges {
                node {
                  slug
                  categories
                }
              }
            }
          }
        `
      ).then(res => {
        if (res.errors) {
          console.log(res.errors)
          reject(res.errors)
        }

        res.data.posts.edges.forEach(({
          node: {
            slug,
            categories
          }
        }) => {
          // Create post page
          createPage({
            path: `/${slug}`,
            component: template.post,
            context: {
              slug,
              categories
            }
          })

          // group all Categories
          categories.forEach(category => {
            category = category.trim()

            if (!allCategories.filter(cat => cat === category).length) {
              allCategories.push(category)
            }

            // Create category page
            createPage({
              path: `/categorias/${toSlug(category)}`,
              component: template.category,
              context: {
                category
              }
            })

            // create a category index
            createPage({
              path: '/categorias',
              component: template.allCategories,
              context: {
                allCategories
              }
            })
          })
        })
      })
    )
  })
}
