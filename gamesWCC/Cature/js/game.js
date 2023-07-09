let select=(it)=>{
    return document.querySelector(it);
}

let temp='0';
let deja=false;
let valide=false;
let b;
function verifier(it){
    let x=select(it);
    if(!deja){
        temp=x.innerHTML;
        b=x;
        b.style.background='lightblue';
        deja=true;
    }else{
        b.innerHTML=x.innerHTML;
        x.innerHTML=temp;
        deja=false;
        b.style.background='var(--colorWhite)';
    }
}

function valider(){
    if(!valide){
        let nb1=select(".nombre1");
        let nb2=select(".nombre2");
        let nb3=select(".nombre3");
        if(nb1+nb2==nb3){
            valide=true;
        }
    }
}