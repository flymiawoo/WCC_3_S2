
consol=select('.console');
consol.style.display='none';
console.log("tonga aty")

function lancer_un_jeux(){
    consol.style.display='flex';
}

select(".closer").addEventListener('click', ()=>{
    consol.style.display='none';
})