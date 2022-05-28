import * as React from 'react'

import * as style from './Footer.module.css'
import '../layout.css'

const Footer = () => {
	const inputValue = (e) => {
		e.preventDefault()
		let input = document.getElementById('hidden')
		console.log(
			`%c${input.value}`,
			'color: white; font-family: system-ui; font-size: 20px'
		)
		input.value = ''
	}
	const date = () => {
		const year = new Date().getFullYear()
		return year
	}
	return (
		<footer className='gridFooter'>
			<div className={style.flexContainer}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 576 512'
					className={style.svg}
				>
					<path d='M9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L246.6 233.4C259.1 245.9 259.1 266.1 246.6 278.6L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 256L9.372 86.63zM544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480H256C238.3 480 224 465.7 224 448C224 430.3 238.3 416 256 416H544z' />
				</svg>
				<form className={style.formContent}>
					<input
						type='text'
						placeholder=''
						id='hidden'
						name='hidden'
						className={style.footerInput}
					/>
					<label htmlFor='hidden' className={style.footerLabel}>
						This is a secret
					</label>
					<button
						type='submit'
						className={style.footerButton}
						onClick={(e) => inputValue(e)}
					>
						Send
					</button>
				</form>
			</div>
			<p>&copy; {date()}</p>
		</footer>
	)
}

export default Footer
