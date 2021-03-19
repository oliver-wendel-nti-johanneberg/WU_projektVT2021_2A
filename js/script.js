const nav_list = document.querySelector('.nav_list')
const nav_lines = document.querySelector('.nav_lines')

function toogleNav() {
    nav_list.classList.toggle('list_toggle')
    nav_lines.classList.toggle('burger_toggle')
}

nav_lines.addEventListener('click', toogleNav)