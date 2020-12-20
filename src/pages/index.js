//home page
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import AuthorData from '../components/author-data'
import Footer from '../components/footer'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteLang = get(this, 'props.data.site.siteMetadata.lang')
    const siteDesc = get(this, 'props.data.site.siteMetadata.description')
    const siteOgImage = get(this, 'props.data.site.siteMetadata.image')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <div>
					<Helmet
						title={siteTitle}
						htmlAttributes={{ lang: siteLang }}
						meta={[
							{ name: 'description', content: siteDesc },
							{ property: 'og:title', content: siteTitle },
							{ property: 'og:type', content: 'blog' },
							{ property: 'og:url', content: posts.slug },
							{ property: 'og:image', content: siteOgImage },
							{ property: 'og:description', content: siteDesc },
							{ name: 'twitter:card', content: 'summary_large_image' },
							{ name: 'twitter:site', content: '@hello_myscreate' },
						]}
					/>
          <Hero data={author.node} siteTitle={siteTitle}/>
					<div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
						</ul>
						<AuthorData />
						<Footer />
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
				title
				lang
				description
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
					publishDateJP: publishDate(formatString: "Y.MM.DD")
					publishDate(formatString: "YYYY-MM-DD")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
