//global nav
import React from 'react'
import { Link } from 'gatsby'
import styles from './scss/navigation.module.scss'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">TAMTAM ONE-PHRASE DIARY</Link>
      </li>
      {/* <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li> */}
    </ul>
  </nav>
)
