let finder=false;
let select=(it)=>{
    return document.querySelector(it);
}
let liste=[
    './src/img/Wooloo.jpg','./src/img/Wolf.jpg','./src/img/SpaceCat.jpg'
]
compare=select('#trouver');
compare.src=liste[Math.floor(Math.random()*3)];

function verifier(parent,ceci){
    let obj=select(ceci);
    if(obj.src==compare.src && !finder){
        select(parent).classList.remove('before');
        select(parent).style.background='lightgreen';
        finder=true;
        setTimeout( ()=>{
            select(parent).style.background='#f9f9f9';
            lancer()
        }, 2000)
    }
    else if(!finder){
        select(parent).style.background='lightcoral';
        obj.src=''
    }
}

let tab=[]

tab[1]=select('#fig1');
tab[2]=select('#fig2');
tab[3]=select('#fig3');

function exchange(i1, i2){
    let temp=i2.src;
    i2.src=i1.src;
    i1.src=temp;
}


function Rand(){
    let x=Math.floor(Math.random()*3+1);
    let y=Math.floor(Math.random()*3+1);
    exchange(tab[x],tab[y])
}


function lancer(){
    compare.src=liste[Math.floor(Math.random()*3)];
    Rand();
    select("._t1").classList.add('before')
    select("._t2").classList.add('before')
    select("._t3").classList.add('before')
    finder=false;
}

lancer()