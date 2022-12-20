/*---------------------------DAY 3---------------------------*/

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
/*---------------------------DAY 3 fim---------------------------*/