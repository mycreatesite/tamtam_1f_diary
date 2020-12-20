import { Link } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        width: `100vw`,
        height: `50vh`,
        display: `flex`,
        justifyContent: `center`,
				alignItems: `center`,
				padding: `0 1rem`,
      }}
    >
      <div>
        <h1>そんなページないよ～</h1>
        <p>
          {`URLが間違ってるんじゃないかな？`}
          <Link to="/" className="link-style">
            ［ほーむにもどる］
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)
export default NotFoundPage