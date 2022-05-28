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
