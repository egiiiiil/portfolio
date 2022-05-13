import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import DarkModeButton from '../DarkmodeButton/DarkmodeButton'

import * as style from './Navbar.module.css'
import '../layout.css'

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
	return (
		<header className="gridNav">
			<nav>
				<ul className={style.navLinks}>
					<li className={style.navLinkItem}>
						<Link to="/" className={style.navLinkText}>
							{data.site.siteMetadata.title}
						</Link>
					</li>
					{/* <li className={style.navLinkItem}>
						<Link to="/about" className={style.navLinkText}>
							About Me
						</Link>
					</li> */}
					<li>
						<DarkModeButton />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
