import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './font.css'

import './layout.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Helmet } from 'react-helmet'
import svg from '../icon.svg'
import ico from '../favicon.ico'
import apple from '../apple-touch-icon.png'
import og from '../portfolio.jpg'
/* import icon192 from '../192.png'
import icon512 from '../512.png' */

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
				<link rel='icon' href={ico} sizes='any' />
				<link rel='icon' href={svg} type='image/svg+xml' />
				<link rel='apple-touch-icon' href={apple} />
				<meta property='og:title' content="Egil Swenning Leyser's Portfolio" />
				<meta
					property='og:description'
					content="Egil Swenning Leyser's Portfolio"
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://https://egilswenningleyser.dev/'
				/>
				<meta property='og:image' content={og} />
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
