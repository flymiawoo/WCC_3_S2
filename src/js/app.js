const menu = document.getElementById('menu-icon')
const menuItem = document.getElementById('menu-container');

let indicateur=false;

menu.addEventListener('click', ()=>{
    if (!indicateur){
        console.log('yesss?..., fa ina ko ty zavatra ty ohh!!?')
        menuItem.classList.add('show')
        indicateur=true;
    }else{
        menuItem.classList.remove('show');
        indicateur=false;
    }
    // zay fa mipotra sy miafina le menu
    // fa mbola tokony amboarina :)  ♥ ☻
})
