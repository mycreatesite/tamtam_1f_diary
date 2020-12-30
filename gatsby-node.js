const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
				})

				const blogPostsPerPage = 9
				const blogPosts = result.data.allContentfulBlogPost.edges.length
				const blogPages = Math.ceil(blogPosts / blogPostsPerPage) 
				Array.from({ length: blogPages }).forEach((_, i) => {
					createPage({
						path: i === 0 ? `/` : `/${i + 1}/`,
						component: path.resolve("./src/templates/index.js"),
						context: {
							skip: blogPostsPerPage * i,
							limit: blogPostsPerPage,
							currentPage: i + 1,
							isFirst: i + 1 === 1,
							isLast: i + 1 === blogPages
						},
					})
				})
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}