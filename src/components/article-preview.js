import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './scss/article-preview.module.scss'


export default ({ article }) => {
	const hasBody = article.body
	let card
	if (hasBody) {
		card =	<Link to={`/blog/${article.slug}`} className={styles.previewlink}>
							<Img alt="" fluid={article.heroImage.fluid} className={styles.previewImg} />
							<div className={styles.previewHukidasi}>
								<time dateTime={article.publishDate}>{article.publishDateJP}</time>
								<h2 className={styles.previewTitle}>
									{article.title}
								</h2>
								<span className={styles.previewArrow}>→</span>
							</div>
						</Link>
	} else {
		card = <div className={styles.previewlink}>
								<Img alt="" fluid={article.heroImage.fluid} className={styles.previewImg} />
								<div className={styles.previewHukidasi}>
									<time dateTime={article.publishDate}>{article.publishDateJP}</time>
									<h2 className={styles.previewTitle}>
										{article.title}
									</h2>
								</div>
						</div>
	}
	return (
		<div className={styles.preview}>
			{card}
		</div>
	)
}
