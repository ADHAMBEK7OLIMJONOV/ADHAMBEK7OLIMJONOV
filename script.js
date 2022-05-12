let nav_bulak2=document.getElementById('nav_bulak2')
function create() {
    let menu = document.createElement("h1")

    menu.classList.add('menu_a')
    menu.innerHTML='menu'

    nav_bulak2.appendChild(menu)
}
create()