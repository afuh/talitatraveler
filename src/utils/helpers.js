export const sortPosts = posts => (
  posts
    .map(post => !post.date ? post : ({
      ...post,
      createdAt: post.date
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
)
