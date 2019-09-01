export const sortPosts = posts => (
  posts
    .map(post => !post.date ? post : ({
      ...post,
      createdAt: post.date
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
)

export const edgesToNode = edges => edges.map(({ node }) => node)
