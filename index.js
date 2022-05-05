const mobileMenu = document.getElementById('mobile-menu')
const listMenu = document.querySelector('.nav_list')
const icons = document.querySelector('#icons')

mobileMenu.addEventListener('click', handleClick)
function handleClick() {
    listMenu.classList.toggle('active')
    icons.classList.toggle('active')
}
