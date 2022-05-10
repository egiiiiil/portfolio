import * as React from 'react'
import { Link } from 'gatsby'

import * as style from './Footer.module.css'
import '../layout.css'

const Footer = () => {
	return (
		<footer className="gridFooter">
			<p>Links</p>
			<ul>
				<li>
					<a href="#">Twitter</a>
				</li>
				<li>RSS</li>
				<li>Contact</li>
			</ul>
		</footer>
	)
}

export default Footer
