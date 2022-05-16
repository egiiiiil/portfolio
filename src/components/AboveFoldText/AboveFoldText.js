import * as React from 'react'
import * as style from './AboveFoldText.module.css'
//import { StaticImage } from 'gatsby-plugin-image'
import '../layout.css'

const AboveFoldText = () => {
	return (
		<aside className="gridAboveFoldText">
			<div className={style.aboveFoldText__container}>
				{/* <StaticImage alt="Mesh" src="../../images/mesh-gradient.png" /> */}
				<p className={style.aboveFoldText__text}>
					Frontend, React, UX, and UI <wbr /> from Uppsala, Sweden.
				</p>
				<p className={style.aboveFoldText__text}>
					My hobbies include 🏋️, 🍔, 🍕, ☕️, 🍺, 🌮 and 🍣.
				</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className={style.aboveFoldText__svg}
				>
					<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
				</svg>
			</div>
		</aside>
	)
}

export default AboveFoldText
