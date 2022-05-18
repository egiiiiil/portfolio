import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import * as style from './index.module.css'

// markup
const NotFoundPage = () => {
	return (
		<Layout pageTitle='404 Page'>
			<div className='gridMain'>
				<main className='mainContent'>
					<nav className='navBack'>
						<span className={style.backSpan}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
								<path d='M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z' />
							</svg>
							<Link to='/'>
								<p>Back to Portfolio</p>
							</Link>
						</span>
					</nav>
					<title>404 | Not found</title>

					<p>404 | Not found</p>
				</main>
			</div>
		</Layout>
	)
}

export default NotFoundPage
