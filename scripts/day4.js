/*---------------------------DAY 4---------------------------*/
/*Para function advinharNumero()*/
var errou =0;
var chances = 3;
var chute= document.getElementById("numeroAdivinhado");
    chute.disabled=true;
    document.querySelector("#adivinhar").disabled=true;


function inciarJogo() {
    chute.disabled=false;
    document.getElementById("inicioJogo").innerHTML=" 🤖 Pensei em um numero entre 0 e 5, tente adivinhar. (Voce tem 3 tentativas) "
    if (errou-chances==0 ){
        document.querySelector("#adivinhar").disabled=false;
        errou=0;
    }
}  
function desblokAdivinhar(){
    if (chute.value<=9 && chute.value !=""){
        document.querySelector("#adivinhar").disabled=false;
    }
    else {
        document.querySelector("#adivinhar").disabled=true;

    }
    
}
addEventListener("keyup", desblokAdivinhar)

function adivinharNumero (){
    var numMaquina = (Math.floor(Math.random() * 6));
    
    var VerificaTentativa = (numMaquina ==chute.value);
     

    if(VerificaTentativa ==true  ){
        document.getElementById("inicioJogo").innerHTML="Parabens!!! voce acertou.🎉🎆"
    }
    else{
        document.getElementById("inicioJogo").innerHTML="Que pena 😢, voce tem mais "+ (2-errou) + " tentativas, o numero era " + numMaquina;
        errou++;
    }
    

    if (errou-chances==0 ){
        document.querySelector("#adivinhar").disabled=true
    }
    
    chute.value="";
       
    
}
/*---------------------------DAY 4 fim---------------------------*/