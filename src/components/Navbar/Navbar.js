import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
	const data = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`)
	return(
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
									About Me
								</Link>
							</li>
							<li>
								<button>Dark Mode</button>
							</li>
						</ul>
					</nav>
				</header>
	)
}

export default Navbar