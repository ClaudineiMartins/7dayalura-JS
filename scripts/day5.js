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
        botaoEnviar.disabled=true;
    }
    else{
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

                let produtos = document.createElement('div');
                produtos.className="produtos";
                let localizacaoLista = document.getElementById(element.setor);
                
                localizacaoLista.appendChild(produtos);
                produtos.appendChild(itemLista);
                produtos.appendChild(listaLabel);
            }
        })
    }
}

/*---------------------------DAY 5 fim - continuação do 6 --------------------------*/
