import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '@fontsource/montserrat'
import './font.css'
import './colors.css'
import './layout.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

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
				<Navbar />
			</div>
			<>
				{children}
			</>
			<Footer />
		</div>
	)
}
export default Layout