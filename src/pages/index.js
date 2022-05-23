import * as React from 'react'
import Layout from '../components/layout'
import AboveFoldText from '../components/AboveFoldText/AboveFoldText'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, graphql } from 'gatsby'
import iconSwitch from '../utils/iconSwitch'
import * as style from './index.module.css'
const IndexPage = ({ data }) => {
	/* console.log(data) */

	return (
		<Layout pageTitle='Home Page'>
			<AboveFoldText />
			{/* <AboutMe /> */}
			<div className='gridMain'>
				<main className='mainContent' id='content-start'>
					<ul className='flexContent'>
						{data.allMdx.nodes.map((node) => (
							/* console.log(node), */

							<li key={node.id} className={style.liCard}>
								<Link to={`/portfolio/${node.slug}`}>
									<div className={style.liCardTop}>
										<h2>{node.frontmatter.title}</h2>
										<p>
											<time>{node.frontmatter.date}</time>
										</p>
									</div>
									<GatsbyImage
										image={getImage(node.frontmatter.hero_image)}
										alt={node.frontmatter.hero_image_alt}
									/>
									<p>{node.frontmatter.blurb}</p>
									{/* <MDXRenderer>{node.body}</MDXRenderer> */}
									{console.log(node.frontmatter.tech_stack)}
									<ul className={style.list}>
										{node.frontmatter.tech_stack.map((tech, i) => (
											<li key={i} className={style.list}>
												<div className={style.techIcons}>
													{iconSwitch({ tech })}
													<p>{tech}</p>
												</div>
											</li>
										))}
									</ul>
								</Link>
							</li>
						))}
					</ul>
				</main>
			</div>
		</Layout>
	)
}
export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM, YYYY")
					title
					blurb
					tech_stack
					hero_image_alt
					hero_image {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				id
				body
				slug
			}
		}
	}
`
export default IndexPage
