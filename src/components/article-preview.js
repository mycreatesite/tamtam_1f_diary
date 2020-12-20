import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './scss/article-preview.module.scss'


export default ({ article }) => {
	return (
		<div className={styles.preview}>
			<Link to={`/blog/${article.slug}`} className={styles.previewlink}>
				<Img alt="" fluid={article.heroImage.fluid}  className={styles.previewImg}/>
				<div className={styles.previewHukidasi}>
					<time dateTime={article.publishDate}>{article.publishDateJP}</time>
					<h3 className={styles.previewTitle}>
						{article.title}
					</h3>
					<span className={styles.previewArrow}>→</span>
				</div>
			</Link>
		</div>
	)
}
