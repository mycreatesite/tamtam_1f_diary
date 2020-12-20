//global nav
import React from 'react'
import { Link } from 'gatsby'
import styles from './scss/navigation.module.scss'

export default (props) => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
				<Link to="/">
					<img src="/img/nav.svg" alt={props.siteTitle} />
				</Link>
      </li>
      {/* <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li> */}
    </ul>
  </nav>
)
