import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
/* import '@fontsource/montserrat' */
import './font.css'
import './colors.css'
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
			{console.log(
				console.log(
					'%cHello',
					'color: white; font-family: system-ui; font-size: 20px'
				)
			)}
			<div className='gridContainer'>
				<Helmet>
					<title>
						{pageTitle} | {data.site.siteMetadata.title}
					</title>
					<link rel='icon' href='/favicon.ico' sizes='any' />
					<link rel='icon' href='/iconsvg.svg' type='image/svg+xml' />
				</Helmet>
				<Navbar />
				<>{children}</>
				<Footer />
			</div>
		</>
	)
}
export default Layout
