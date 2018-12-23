const path = require(`path`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const template = {
    post: path.resolve('src/templates/post.js')
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
            slug
          }
        }) => {
          createPage({
            path: `/${slug}`,
            component: template.post,
            context: {
              slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    post
  ])
}
