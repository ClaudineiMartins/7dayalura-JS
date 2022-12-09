function capturar(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;
    var resultado = 'Ola,  ' + nome + ' voce tem  ' + idade + ' anos e ja esta aprendendo ' + linguagem;
    document.getElementById("resultado").innerHTML = resultado;
}


function clicouRadio(opcao) {
    resultado = document.getElementById("resultado");
    if (opcao == 1) {
        resultado.innerHTML = "Você deve aprender React ou Vue";
    } else {
        resultado.innerHTML = "Você deve aprender C# ou Java";
    }
}



function adicionaEscolha() {
    tecnologiasEscolhidas = document.getElementById("tecnologiasEscolhidas");
    tecnologiasEscolhidas.innerHTML +=
      " , " + document.getElementById("adicionarTech").value;
  
    document.getElementById("quaisTecnologias").innerHTML =
      "Voce pode continuar digitando! Tem mais alguma tecnologia que você quer aprender ?";
    document.getElementById("adicionarTech").value = " ";
}



/*---------------------------DAY 4---------------------------*/
/*Para function advinharNumero()*/
var errou =0;
var chances = 3;



function inciarJogo() {
    document.getElementById("inicioJogo").innerHTML=" 🤖 Pensei em um numero entre 0 e 5, tente adivinhar. (Voce tem 3 tentativas) "
    if (errou-chances==0 ){
        document.querySelector("#adivinhar").disabled=false;
        errou=0;
    }
}  


function adivinharNumero (){
    var numMaquina = (Math.floor(Math.random() * 6));
    console.log("numero maquina "+ numMaquina);
    var chute= document.getElementById("numeroAdivinhado").value;
    var VerificaTentativa = (numMaquina ==chute);

    if(VerificaTentativa ==true  ){
        document.getElementById("inicioJogo").innerHTML="Parabens!!! voce acertou.🎉🎆"
    }
    else{
        document.getElementById("inicioJogo").innerHTML="Que pena 😢, voce tem mais "+ (2-errou) + " tentativas"
        errou++;
    }
    

    if (errou-chances==0 ){
        document.querySelector("#adivinhar").disabled=true
    }
    
    console.log(errou);
       
    
}
/*---------------------------DAY 4---------------------------*/
