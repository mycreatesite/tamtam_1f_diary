import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const SearchResult = props => {
	const tempData = useStaticQuery(graphql`
        query SearchData {
            postForSearch: allContentfulBlogPost( sort: {fields: createdAt, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        createdAt(formatString: "YYYY-MM-DD")
                        heroImage {
                            fluid(maxWidth: 80, background: "rgb:000000") {
                              ...GatsbyContentfulFluid_tracedSVG
                              src
                            }
                        }
                    }
                }
            }
		}
	`)

	const emptyQuery = ""
	const [state, setState] = useState({
	  filteredData: [],
	  query: emptyQuery,
	})
	const handleInputChange = event => {
	  const query = event.target.value
	  const posts = tempData.postForSearch.edges || []

	  const filteredData = posts.filter(post => {
	    const title = post.node.title
	    return (
	      title.toLowerCase().includes(query.toLowerCase())
	    )
	  })
	  setState({
	    query,
	    filteredData,
      })
      console.log(filteredData);
	}
	const { filteredData, query } = state
	const hasSearchResults = filteredData && query !== emptyQuery
	const result = hasSearchResults ? filteredData : []

	return (
		<div className="result-outer">
			<div className="result-inner">
				<div className="searchInput">
					<label>
						<input
							type="text"
							aria-label="Search"
							onChange={handleInputChange}
							placeholder="どんなにっきをけんさくする？"
						/>
						<span>どんなにっきをけんさくする？</span>
					</label>
				</div>
				<div className="result-inner__res">
					{query !== "" ?
						`${query} の検索結果 ${result.length}件`
						: result.length + "件の記事があります"
					}
				</div>
				<ul className="result-inner__search">
					{result && result.map(({ node: post }) => {
						return (
							<li key={post.slug}>
								<a href={`/blog/${post.slug}/`}>
									<div className="result-inner__image">
										<img src={post.heroImage.fluid.src} alt=""/>
									</div>
									<div className="result-inner__content">
										<div className="result-inner__content__title">
											{post.title}
										</div>
										<div className="result-inner__content__info">
											<span className="label-default result-inner__content__info-date">{post.createdAt}</span>
										</div>
									</div>
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default SearchResult