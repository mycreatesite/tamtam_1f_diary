import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './scss/article-preview.module.scss'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
		<time dateTime={article.publishDate}>{article.publishDateJP}</time>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
