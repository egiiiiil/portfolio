import * as React from 'react'
import * as style from './AboutMe.module.css'
//import { StaticImage } from 'gatsby-plugin-image'
import '../layout.css'

const AboutMe = () => {
	return (
		<aside className="gridAboutMe">
			<p className={style.aboutMe__text}>
				My hobbies include 🏋️{/* * */} and 🍔{/* ** */}, 🍕, ☕️, 🍺
				{/* 				<span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span> */}
				,🌮
				{/* <span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span> */}
				and 🍣
				{/* 				<span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span> */}
				.
			</p>
			{/* <p className={style.aboutMe__small}>
				* weightlifting, ** hamburgers,{' '}
				<span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span>
				pizza,
				<span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span>
				tacos,
				<span className={style.stars}>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
					<span>*</span>
				</span>
				sushi
			</p> */}
		</aside>
	)
}

export default AboutMe
