import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

import * as style from './slug.module.css'

const PortfolioPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image)
	const switchCase = (tech) => {
		switch (tech.tech) {
			case 'Gatsby':
				return 'Gatsby'
				break
			case 'PostCSS':
				return 'PostCSS'

			case 'MDX for content':
				return 'MDX for content'

			case 'GraphiQL':
				return 'GraphiQL'

			case 'Next.js':
				return 'Next.js'

			case 'Node.js':
				return 'Node.js'

			case 'Express.js':
				return 'Express.js'

			case 'MongoDB':
				return 'MongoDB'

			case 'React':
				return 'React'

			case 'SR API':
				return 'SR API'

			case 'Vanilla JS':
				return 'Vanilla JS'

			case 'LocalStorage':
				return 'LocalStorage'

			case 'UX/UI':
				return 'UX/UI'

			case 'Mocha':
				return 'Mocha'

			case 'Chai':
				return 'Chai'

			default:
				;<></>
		}
	}

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div className="gridMain">
				<div className="mainContent">
					<span className={style.backSpan}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
						</svg>
						<Link to="/">
							<p>Back to Portfolio</p>
						</Link>
					</span>

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
					{/* {console.log(data.mdx.frontmatter)} */}

					{/* 				{data.mdx.frontmatter.tech_stack.map((node) => console.log(node))} */}
					<div className={style.contentContainer}>
						<aside>
							<ul className={style.list}>
								<h3>Tech stack:</h3>
								{data.mdx.frontmatter.tech_stack.map((tech, i) => (
									<li key={i} className={style.listItem}>
										{console.log({ tech })}
										{/* <StaticImage
								src={`../images/techStack/${switchCase({ tech })}.svg`}
								alt={tech}
							/> */}
										{switchCase({ tech })}
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
				date(formatString: "MMMM DD, YYYY")
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
{
	/* <StaticImage src={`./image/techStack/${tech}.svg`} alt={tech} /> */
}

/*  */
