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
		<header className='gridNav'>
			<nav>
				<ul className={style.navLinks}>
					<li className={style.navLinkItem}>
						<Link to='/'>
							<h1 className={style.navLinkH1}>
								{data.site.siteMetadata.title}
							</h1>
						</Link>
					</li>
					<li>
						<DarkModeButton />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
