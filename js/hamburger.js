const nav = document.getElementById('top-nav')
const hamburger = document.getElementById('top-nav-menu-hamburger')

nav.addEventListener('click', handleNav)
hamburger.addEventListener('click', handleNav)

function handleNav() {
  if(!nav.classList.contains('top-nav--active')){
    nav.classList.add('top-nav--active');
    hamburger.classList.add('top-nav-menu-hamburger--active')
  } else{
    nav.classList.remove('top-nav--active');
    hamburger.classList.remove('top-nav-menu-hamburger--active');
  }
}