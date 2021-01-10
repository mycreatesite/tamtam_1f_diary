import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './scss/article-preview.module.scss'
import classNames from 'classnames'

export default ({ article }) => {
	const hasBody = article.body
	const cardClass = classNames(styles.previewlink, 'js-reveal')
	let card
	if (hasBody) {
		card =	<Link to={`/blog/${article.slug}`} className={cardClass}>
							<Img alt="" fluid={article.heroImage.fluid} className={styles.previewImg} />
							<div className={styles.previewHukidasi}>
								<div className={styles.previewTime}>
									<time dateTime={article.publishDate}>{article.publishDateJP}</time>
								</div>
								<h2 className={styles.previewTitle}>
									{article.title}
								</h2>
								<div className={styles.previewArrow}>
									<span className={styles.previewMore}>もっとみる →</span>
								</div>
							</div>
						</Link>
	} else {
		card =  <div className={cardClass}>
							<Img alt="" fluid={article.heroImage.fluid} className={styles.previewImg} />
							<div className={styles.previewHukidasi}>
								<div className={styles.previewTime}>
									<time dateTime={article.publishDate}>{article.publishDateJP}</time>
								</div>
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
