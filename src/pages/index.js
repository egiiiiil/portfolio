import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <aside className="site-grid-above-fold-text">
			  <p className="above-fold-text__text">
					Frontend, UX, and UI from <wbr/>Uppsala, Sweden.
				</p>
			</aside>
      <main className="site-grid-main">
        
{/*         <StaticImage
          alt="Mesh"
          src="../images/mesh-gradient.png"
        /> */}
        {
        data.allMdx.nodes.map((node) => (
          <ul key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            {/* <p>Posted: {node.frontmatter.date}</p> */}
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </ul>
        ))
      }
      </main>
    </Layout>
    
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`
export default IndexPage
