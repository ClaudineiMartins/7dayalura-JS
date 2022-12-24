/*---------------------------DAY 2---------------------------*/
function capturar(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;
    var resultado = 'Ola,  ' + nome + ' voce tem  ' + idade + ' anos e ja esta aprendendo ' + linguagem;
    document.getElementById("resultado").innerHTML = resultado;    
}
/*---------------------------DAY 2 fim---------------------------*/