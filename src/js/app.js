const menu = document.getElementById('menu-icon')
const menuItem = document.getElementById('menu-container');

menu.addEventListener('click', ()=>{
    console.log('yesss')
    menuItem.classList.add('show')
})
