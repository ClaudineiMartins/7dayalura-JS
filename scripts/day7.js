let e =document.querySelectorAll(".teclas [value ='e']");
let µ =document.querySelectorAll(".teclas [value ='µ']");
let sin =document.querySelectorAll(".teclas [value ='sin']");
let deg =document.querySelectorAll(".teclas [value ='deg']");
let Ac =document.querySelectorAll(".teclas [value ='Ac']");
let apagar =document.querySelectorAll(".teclas [value ='']");
let dividir =document.querySelectorAll(".teclas [value ='/']");
let sete =document.querySelectorAll(".teclas [value =''7]");
let oito =document.querySelectorAll(".teclas [value ='8']");
let nove =document.querySelectorAll(".teclas [value ='9']");
let quatro =document.querySelectorAll(".teclas [value ='4']");
let cinco =document.querySelectorAll(".teclas [value ='5']");
let seis =document.querySelectorAll(".teclas [value ='6']");
let um =document.querySelectorAll(".teclas [value ='1']");
let dois =document.querySelectorAll(".teclas [value ='2']");
let tres =document.querySelectorAll(".teclas [value ='3']");
let zero =document.querySelectorAll(".teclas [value ='0']");
let ponto = document.querySelectorAll(".teclas [value ='.']");
let *=document.querySelectorAll(".teclas [value ='*']");
let igual =document.querySelectorAll(".teclas [value ='=']");



function soma (){
    escrevernatela ();
}
function escrevernatela (){



    let LocalResultado = document.querySelector("#Calc-Resultados")
    let digito = document.querySelector(".buttons").textContent;

    LocalResultado.innerHTML=digito;
}
oito.addEventListener("click", escrevernatela)