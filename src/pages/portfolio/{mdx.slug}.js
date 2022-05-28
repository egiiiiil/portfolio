import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import iconSwitch from '../../utils/iconSwitch'

import * as style from './slug.module.css'

const PortfolioPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image)

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div className='gridMain'>
				<div className='mainContent'>
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
					<div className={style.topInfo}>
						<h2>{data.mdx.frontmatter.title}</h2>
						<p>
							<time>{data.mdx.frontmatter.date}</time>
						</p>
					</div>

					<GatsbyImage
						image={image}
						alt={data.mdx.frontmatter.hero_image_alt}
					/>
					<div className={style.contentContainer}>
						<aside>
							<h3>Tech stack:</h3>
							<ul className={style.list}>
								{data.mdx.frontmatter.tech_stack.map((tech, i) => (
									<li key={i} className={style.listItem}>
										<div className={style.techIcons}>
											{iconSwitch({ tech })}
											<p>{tech}</p>
										</div>
									</li>
								))}
							</ul>
						</aside>
						<main className={style.text}>
							<MDXRenderer>{data.mdx.body}</MDXRenderer>
						</main>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				date(formatString: "MMMM, YYYY")
				hero_image_alt
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
				tech_stack
			}
		}
	}
`
export default PortfolioPost
