import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// markup
const NotFoundPage = () => {
	return (
		<Layout pageTitle="404 Page">
			<main className="gridMain">
				<title>404 | Not found</title>
				<h1>Page not found</h1>
				<p>404 | Not found</p>
				<p>
					<Link to="/">Go home</Link>.
				</p>
			</main>
		</Layout>
	)
}

export default NotFoundPage
