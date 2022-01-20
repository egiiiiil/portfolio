/* BUTTON TEXT */
let buttonText = document.querySelector('#site-grid-nav__darkmode-button');


let preferColorSchemeDark  = window.matchMedia('(prefers-color-scheme: dark)');
let preferColorSchemeLight = window.matchMedia('(prefers-color-scheme: light)');
/* CHECK IF DARKMODE IS ACTIVE */
checkDark = () => {
	console.log('1');
	if (preferColorSchemeDark.matches) { /* IF ACTIVE -> */
		console.log('PREF DARK');
		buttonText.innerHTML = '☀';
		document.querySelector('.toggle-me').classList.toggle('dark'); /* ACTIVATE DARKMODE AUTO */
	} else if (preferColorSchemeLight.matches) { /* IF NOT -> */
		buttonText.innerHTML = '🌙';
		console.log('PREF LIGHT');
		console.log(buttonText);
	}
}


toggleState = () => {
	console.log('2')
	let toggle = document.querySelector('.toggle-me').classList.toggle('dark');
	console.log(toggle);
	
	if (toggle == true) {
		document.querySelector('#site-grid-nav__darkmode-button').innerHTML = '☀';
		console.log(document.querySelector('#site-grid-nav__darkmode-button'));
	} else {
		document.querySelector('#site-grid-nav__darkmode-button').innerHTML = '🌙';
		console.log('LIGHT');
	}
};