import React from 'react'

import styles from './scss/hero.module.scss'

export default (props) => (
	<div className={styles.hero}>
		<h1 className={styles.heroImage}>
			<img src="/img/hero.svg" alt={props.siteTitle} width="809" height="450"/>
		</h1>
  </div>
)
