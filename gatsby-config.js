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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Egil J. Swenning Leyser',
				start_url: '/',
				background_color: '#000',
				theme_color: '#9168d2',

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
