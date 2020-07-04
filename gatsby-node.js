const path = require(`path`)
const slugify = require('@sindresorhus/slugify')

const redirects = require('./config/redirects')

exports.createPages = async ({ graphql, reporter, actions: { createPage, createRedirect } }) => {
  const postsPerPage = 9
  const allCategories = []
  const template = {
    post: path.resolve('src/templates/post.js'),
    posts: path.resolve('src/templates/posts.js'),
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

  const { data } = await graphql(`
    {
      posts: allContentfulPost(sort: { fields: date, order: DESC }) {
        totalCount
        edges {
          node {
            slug
            categories
          }
        }
      }
    }
  `)

  Array.from({ length: Math.ceil(data.posts.totalCount / postsPerPage) }).forEach((_, i) => {
    createPage({
      path: `/posts/${i + 1}`,
      component: template.posts,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    })
  })

  data.posts.edges.forEach(({ node: { slug, categories } }) => {
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
}
