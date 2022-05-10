module.exports = {
	siteMetadata: {
		title: 'Egil J. Swenning Leyser',
	},
	/* flags: {
		PARALLEL_QUERY_RUNNING: true,
	}, */
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `portfolio`,
				path: `${__dirname}/portfolio/`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'GatsbyJS',
				short_name: 'GatsbyJS',
				start_url: '/',
				background_color: '#6b37bf',
				theme_color: '#6b37bf',

				icons: [
					{
						src: '/icon192.png',
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: '/icon512.png',
						type: 'image/png',
						sizes: '512x512',
					},
				],
			},
		},
	],
}
