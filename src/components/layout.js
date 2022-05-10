import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
/* import '@fontsource/montserrat' */
import './font.css'
import './colors.css'
import './layout.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import a from '../../'
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
		<div className="gridContainer">
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#FFED48"></meta>
				<title>
					{pageTitle} | {data.site.siteMetadata.title}
				</title>
				{/* <link rel="canonical" href="http://mysite.com/example" /> */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				{/* <!-- 32×32 --> */}
				<link rel="icon" href="/iconsvg.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				{/* <!-- 180×180 --> */}
			</Helmet>
			<Navbar />
			<>{children}</>
			<Footer />
		</div>
	)
}
export default Layout
