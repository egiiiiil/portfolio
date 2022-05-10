import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

import * as style from './slug.module.css'

const PortfolioPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image)
	console.log(image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<main className="gridMain">
				<span className={style.backSpan}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
					</svg>

					<Link to="/">
						<p>Back to Portfolio</p>
					</Link>
				</span>
				<p>{data.mdx.frontmatter.date}</p>
				<GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</main>
		</Layout>
	)
}
export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				hero_image_alt
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`
export default PortfolioPost
