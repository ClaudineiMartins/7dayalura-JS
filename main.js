/*---------------------------DAY 2---------------------------*/

function capturar(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;
    var resultado = 'Ola,  ' + nome + ' voce tem  ' + idade + ' anos e ja esta aprendendo ' + linguagem;
    document.getElementById("resultado").innerHTML = resultado;
}

/*---------------------------DAY 2 fim---------------------------*/
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
    if (chute.value<=9){
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
/*---------------------------DAY 5 e 6 INICIO --------------------------*/
const botaoEnviar = document.querySelector(".enviar");
let categoria = document.querySelector("#categoria");
let inputLista = document.querySelector("#txtListaCompras");
const divLista = document.getElementById("lista");
let itemsLista = [];
let arrCategoria = [];


function LiberarInput (){
    var txtListaCompras=document.querySelector("#txtListaCompras");
    var listaSuspensa=document.getElementById("categoria").value;
    if (listaSuspensa!=="nenhum"){    
        txtListaCompras.disabled=false;  
        txtListaCompras.placeholder=" Digite um item para adicionar a Lista de compras "
    }
    else{
        txtListaCompras.disabled=true; 
        txtListaCompras.placeholder=" Selecione a categoria primeiro"
    }
 }
categoria.addEventListener("click", LiberarInput)

botaoEnviar.disabled=true;
function LiberarEnviar (){
    if ((inputLista.value =="")){
        console.log('pass')
        botaoEnviar.disabled=true;
    }
    else{
        console.log('nao')
        botaoEnviar.disabled=false;
        
    }
}
inputLista.addEventListener ("keyup",  LiberarEnviar)

function BloquearEnvio() {
    botaoEnviar.disabled=true;
    inputLista.disabled=true;

 }
botaoEnviar.addEventListener ("click", BloquearEnvio)



function adicionaLista(){ 
    adicionarItens(inputLista.value, categoria.value);
    imprimirItens();}
botaoEnviar.addEventListener("click", adicionaLista )

function adicionarItens (nome, setor){
    let itens = {
        nome: nome,
        setor: setor
    }
    itemsLista.push(itens); 
    adicionarCategoria (itens.setor);
    categoria.value="";
    inputLista.value="";
}

function adicionarCategoria (cat){
    if(arrCategoria.includes(cat)==false){
        arrCategoria.push(cat);
    }
}

function imprimirItens (){
    divLista.innerHTML = "";
    for(let i=0; i<arrCategoria.length; i++){
        let criarDiv = document.createElement('div');
        criarDiv.id = arrCategoria[i];
        criarDiv.innerHTML = `<h2>${arrCategoria[i]}</h2>`;
        divLista.appendChild(criarDiv);

        itemsLista.filter((element) => {
            if (element.setor == arrCategoria[i]) {


                let itemLista = document.createElement('input');
                itemLista.className = "itensListaCompras";
                itemLista.type = 'checkbox';
                itemLista.id = `${element.nome}`;
                itemLista.value = `${element.nome}`;
                var listaLabel = document.createElement('label');
                listaLabel.setAttribute('for', element.nome);
                listaLabel.innerHTML = `${element.nome}`;
                let localizacaoLista = document.getElementById(element.setor);
                localizacaoLista.appendChild(itemLista);
                localizacaoLista.appendChild(listaLabel);
            }
        })
    }
}

/*---------------------------DAY 5 fim - continuação do 6 --------------------------*/





