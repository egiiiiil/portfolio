module.exports = {
	siteMetadata: {
		title: 'Egil Swenning Leyser',
	},

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
				name: 'Egil Swenning Leyser',
				start_url: '/',
				background_color: '#000',
				theme_color: '#b968d2',

				icons: [
					{
						src: `/static/192-fc4cea943aa4346d8cedab0176df4500.png`,
						/* static/192-fc4cea943aa4346d8cedab0176df4500.png */
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: `/static/512-33fa98142620c14d3294a142fcc8c4f3.png`,
						type: 'image/png',
						sizes: '512x512',
					},
				],
			},
		},
	],
}
