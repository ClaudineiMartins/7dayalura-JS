// function capturar(){
//     var nome = document.getElementById("nome").value;
//     var idade = document.getElementById("idade").value;
//     var linguagem = document.getElementById("linguagem").value;
//     var resultado = 'Ola,  ' + nome + ' voce tem  ' + idade + ' anos e ja esta aprendendo ' + linguagem;
//     document.getElementById("resultado").innerHTML = resultado;
// }
function teste(){
    var area = document.activeElement.value;
    var areaResposta = 'Voce escolheu a area de ' + area;
    document.getElementById("resultado").innerHTML = areaResposta;
    
}