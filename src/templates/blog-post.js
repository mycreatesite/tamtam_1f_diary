//post-detail
import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import AuthorData from '../components/author-data'
import Footer from '../components/footer'
import SEO from '../components/seo'
import styles from './scss/blog-post.module.scss'

class BlogPostTemplate extends React.Component {
	render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const heroImageSrc = 'https:' + post.heroImage.fluid.src;
    
    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <div>
					<SEO
            title={`${post.title} | ${siteTitle}`}
            image = {heroImageSrc}
					/>
          <div className={styles.hero}>
            <Img
              className={styles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
					</div>
					<div className={styles.postHeader}>
						<time
							dateTime={post.publishDate}
            >
              {post.publishDateJP}
						</time>
						<h1 className="section-headline">{post.title}</h1>
					</div>
          <div className="wrapper blog-post-wrapper">
						{post.body && (
							<div
								className={styles.postContent}
								dangerouslySetInnerHTML={{
									__html: post.body.childMarkdownRemark.html,
								}}
							/>
						)}
						<p className={styles.btnBack}>
							<Link to="/">
								<span>← とっぷへもどる</span>
							</Link>
						</p>
						<AuthorData />
						<Footer />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
			publishDateJP: publishDate(formatString: "Y年MM月DD日")
			publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        fluid(maxWidth: 1200, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
