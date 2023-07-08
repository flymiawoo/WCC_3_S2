const menu = document.querySelector('.logo') //nosoloiko mba le logo no potserina de mipotra leizy
const menuItem = document.getElementById('menu-container');
const menu2 = document.querySelector('.off');
const divMenu = document.querySelector('.menu');

let windowX;

let indicateur=false;

menu.addEventListener('click', ()=>{
    if (!indicateur){
        // console.log('yesss?..., fa ina ko ty zavatra ty ohh!!?')
        open(menuItem)
    }else {
        close()
    }
    // zay fa mipotra sy miafina le menu
    // fa mbola tokony amboarina :)  ♥ ☻
})

function close(){
        divMenu.style.top="-150%";
        indicateur=false;
        setTimeout(()=>{
            menuItem.classList.remove('show');
        },100)
}
function open(x){
    x.classList.add('show')
    divMenu.style.top="100px";
    indicateur=true;
}

function getit(x){
    return document.querySelector(x);
}

function noText(it){
    return it.innerHtml="";
}

// manao animation anle zaza fa tsy mety tafavoka
let zaza=document.querySelector(".zaza");
    zaza.style.display="flex";
    zaza.style.left="120px";

window.addEventListener('resize', ()=>{
    if (window.width<="720px"){
        let its = getit(".inMenu");
        its.classList.add("hide")
    }
})