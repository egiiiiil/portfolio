let navIcon = document.querySelector('.nav__name');
console.log(navIcon);

let mobileMedieQuery = window.matchMedia('max-width: 481px');
console.log(mobileMedieQuery);
if (mobileMedieQuery.matches) {
	console.log('MOBILE MQ');
} else {
	console.log('NOT MOBILE MQ');
}