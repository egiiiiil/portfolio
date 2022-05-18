import * as React from 'react'
import * as style from './AboutMe.module.css'
//import { StaticImage } from 'gatsby-plugin-image'
import '../layout.css'

const AboutMe = () => {
	return (
		<aside className='gridAboutMe'>
			<p className={style.aboutMe__text}>
				My hobbies include 🏋️ and 🍔, 🍕, ☕️, 🍺 ,🌮 and 🍣.
			</p>
		</aside>
	)
}

export default AboutMe
