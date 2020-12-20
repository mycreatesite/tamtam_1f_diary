import { Link } from "gatsby"
import React from "react"
import SEO from '../components/seo'
const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div
      style={{
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
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
  </div>
)
export default NotFoundPage