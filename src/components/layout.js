import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './layout.css'

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	return (
		<div className="site-grid-container">
			<title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className="site-grid-nav">
				<header className="site-title">
					<nav>
						<ul className="nav-links">
							<li className="nav-link-item">
								<Link to="/" className="nav-link-text">
								{data.site.siteMetadata.title}
								</Link>
							</li>
							<li className="nav-link-item">
								<Link to="/about" className="nav-link-text">
									About
								</Link>
							</li>
							<li>
								<button>Dark Mode</button>
							</li>
						</ul>
					</nav>
				</header>
			</div>
			<>
				{children}
			</>
		</div>
	)
}
export default Layout