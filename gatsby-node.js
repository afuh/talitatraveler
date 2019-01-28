const path = require(`path`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const allCategories = []
  const template = {
    post: path.resolve('src/templates/post.js'),
    category: path.resolve('src/templates/category.js'),
    allCategories: path.resolve('src/templates/allCategories.js')
  }

  const post = new Promise((resolve, reject) => {
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

            const slug = category
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/ /g, '-')

            if (!allCategories.filter(cat => cat === category).length) {
              allCategories.push(category)
            }

            // Create category page
            createPage({
              path: `/categorias/${slug}`,
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

  return Promise.all([
    post
  ])
}
