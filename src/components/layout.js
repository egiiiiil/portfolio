import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
//import getInitialColorMode from '../utils/getInitialColorMode'
import './font.css'

import './layout.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Helmet } from 'react-helmet'

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
		<>
			<Helmet htmlAttributes={{ lang: 'en-GB' }}>
				<title>
					{pageTitle} | {data.site.siteMetadata.title}
				</title>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/iconsvg.svg' type='image/svg+xml' />
			</Helmet>

			<div className='gridContainer'>
				<Navbar />
				<>{children}</>
				<Footer />
			</div>
		</>
	)
}
export default Layout
