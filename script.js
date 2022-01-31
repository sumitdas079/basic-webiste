const Hamburger=document.getElementsByClassName('hamburger')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]

Hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
