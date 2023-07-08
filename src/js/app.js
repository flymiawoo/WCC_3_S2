const menu = document.getElementById('menu-icon')
const menuItem = document.getElementById('menu-container');
const divMenu = document.querySelector('.menu');

let windowX;

let indicateur=false;

menu.addEventListener('click', ()=>{
    if (!indicateur){
        console.log('yesss?..., fa ina ko ty zavatra ty ohh!!?')
        menuItem.classList.add('show')
        divMenu.style.top="100px";
        indicateur=true;
    }else {
        close()
    }
    // zay fa mipotra sy miafina le menu
    // fa mbola tokony amboarina :)  ♥ ☻
})

function close(){
        divMenu.style.top="-100%";
        indicateur=false;
        setTimeout(()=>{
            menuItem.classList.remove('show');
        },100)
    }

function getClass(x){
    return document.querySelector(x);
}

function noText(it){
    
}

// manao animation anle zaza fa tsy mety tafavoka
let zaza=document.querySelector(".zaza");
    zaza.style.display="flex";
    zaza.style.left="120px";

