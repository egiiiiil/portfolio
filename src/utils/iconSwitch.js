import React from 'react'
import gatsby from '../images/techStack/gatsby.svg'
import postCSS from '../images/techStack/postcss.svg'
import mdx from '../images/techStack/mdx.svg'
import graphiQL from '../images/techStack/graphiql.svg'
import next from '../images/techStack/next.svg'
import node from '../images/techStack/node.svg'
import express from '../images/techStack/express.svg'
import mongoDB from '../images/techStack/mongoDB.svg'
import react from '../images/techStack/react.svg'
import api from '../images/techStack/api.svg' // find
import vanilla from '../images/techStack/vanilla.svg'
import localstorage from '../images/techStack/localstorage.svg' //find
import uxui from '../images/techStack/uxui.svg'
import mocha from '../images/techStack/mocha.svg'
import chai from '../images/techStack/chai.svg'
import sass from '../images/techStack/sass.svg'

const iconSwitch = (tech) => {
	switch (tech.tech) {
		// case 'Gatsby':
		// 	return 'Gatsby'
		case 'Gatsby':
			return gatsby
		case 'PostCSS':
			return postCSS
		case 'MDX':
			return mdx
		case 'GraphiQL':
			return graphiQL
		case 'Next.js':
			return next
		case 'Node.js':
			return node
		case 'Express.js':
			return express
		case 'MongoDB':
			return mongoDB
		case 'React':
			return react
		case 'SR API':
			return api
		case 'Vanilla JS':
			return vanilla
		case 'LocalStorage':
			return localstorage
		case 'UX/UI':
			return uxui
		case 'Mocha':
			return mocha
		case 'Chai':
			return chai
		case 'SASS':
			return sass
		default:
			;<></>
	}
}
export default iconSwitch
