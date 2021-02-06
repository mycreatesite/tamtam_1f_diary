//home page
import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import AuthorData from '../components/author-data'
import Footer from '../components/footer'
import SEO from '../components/seo'
import ModalSeach from "../components/modalSearch";

class RootIndex extends React.Component {
	render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteLang = get(this, 'props.data.site.siteMetadata.lang')
    const siteDesc = get(this, 'props.data.site.siteMetadata.description')
    const siteOgImage = get(this, 'props.data.site.siteMetadata.image')
	const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <div>
			<SEO title={siteTitle}
				description={siteDesc}
				image={siteOgImage}
				lang={siteLang}
			/>
         	<Hero siteTitle={siteTitle}/>
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
			<ul className="pagination">
				{!this.props.pageContext.isFirst && (
					<li>
						<Link to={this.props.pageContext.currentPage === 2 ? `/` : `/${this.props.pageContext.currentPage - 1}/`}
						rel="prev"
						className="label-default label-large"
						>←まえのぺーじ</Link>
					</li>
				)}
				{!this.props.pageContext.isLast && (
					<li>
						<Link to={`/${this.props.pageContext.currentPage + 1}/`}
						rel="next"
						className="label-default label-large"
						>つぎのぺーじ→</Link>
					</li>
				)}
			</ul>
			<AuthorData />
			<Footer />
			<ModalSeach />
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
				title
				lang
				description
      }
    }
    allContentfulBlogPost(
			sort: { fields: [publishDate], order: DESC }
			skip: $skip
			limit: $limit
			) {
      edges {
        node {
          title
					slug
					body {
						body
					}
					publishDateJP: publishDate(formatString: "Y.MM.DD")
					publishDate(formatString: "YYYY-MM-DD")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
