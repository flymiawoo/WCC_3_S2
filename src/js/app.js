const menu = document.getElementById('menu-icon')
const menuItem = document.getElementById('menu-container');
const divMenu = document.querySelector('.menu');

let indicateur=false;

menu.addEventListener('click', ()=>{
    if (!indicateur){
        console.log('yesss?..., fa ina ko ty zavatra ty ohh!!?')
        menuItem.classList.add('show')
        divMenu.style.top="100%";
        indicateur=true;
    }else{
        divMenu.style.top="-100%";
        indicateur=false;
        setTimeout(()=>{
            menuItem.classList.remove('show');
        },100)
    }
    // zay fa mipotra sy miafina le menu
    // fa mbola tokony amboarina :)  ♥ ☻
})
