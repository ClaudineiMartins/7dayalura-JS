const btnBotoes = document.querySelectorAll('[data-numero]');
const btnEspeciais = document.querySelectorAll('[data-especiais]');
const btnDeleteAll = document.querySelector('[data-all-clear]');
const btnOperadores = document.querySelectorAll('[data-operador]');
const btnIgual = document.querySelector('[data-igual]');
const btnDelete = document.querySelector('[data-delete]');
const operacaoAnterior_ElementoTexo = document.querySelector('[data-operacao-anterior]');
const operacaoAtual_ElementoTexo = document.querySelector('[data-operacao-atual]');

class Calcular{
    constructor (operacaoAnterior_ElementoTexo, operacaoAtual_ElementoTexo ) {
        this.operacaoAnterior_ElementoTexo = operacaoAnterior_ElementoTexo;
        this.operacaoAtual_ElementoTexo = operacaoAtual_ElementoTexo;
        this.clear();
    }
    formatarNumeroTela(numero){
        const stringNumbero = numero.toString();
        
    }
    
    delete(){
        this.operacaoAtual= this.operacaoAtual.toString().slice(0,-1);
    }

    calcule(){
        let resultado;
        const _operacaoAnterior = parseFloat(this.operacaoAnterior)
        const _operacaoAtual = parseFloat(this.operacaoAtual)


        if (isNaN(_operacaoAnterior) || isNaN (_operacaoAtual)) return;


        switch (this.operacao) {
            case '+':
                resultado = _operacaoAnterior + _operacaoAtual;
                break;
            case '-':
                resultado = _operacaoAnterior - _operacaoAtual;
                break;
            case '/':
                resultado = _operacaoAnterior / _operacaoAtual;
                break;
            case '*':
                resultado = _operacaoAnterior * _operacaoAtual;
                break;    
            default: 
                return;               
        }
        this.operacaoAtual = resultado;
        this.operacao = undefined;
        this.operacaoAnterior = "";
    }

    escolherOperacao (operacao){
        if(this.operacaoAtual ==""){
            return;
        }
        if (this.operacaoAnterior !== ""){
            this.calcule()

        }
        this.operacao = operacao;
        this.operacaoAnterior = this.operacaoAtual;
        this.operacaoAtual = "";

    }
    acrescentarNumero (numero) {
        if (this.operacaoAtual.includes(".") && numero === ".") return;

        this.operacaoAtual = `${this.operacaoAtual}${numero.toString()}`;
    }
    

    clear (){
        this.operacaoAtual = "";
        this.operacaoAnterior = "";
        this.operation = undefined;
    }
    atualizaTela (){
        operacaoAnterior_ElementoTexo.innerText = `${this.operacaoAnterior} ${this.operacao || ""} `;
        operacaoAtual_ElementoTexo.innerText = this.operacaoAtual;
    }

}


const calcular = new Calcular(
    operacaoAnterior_ElementoTexo,
    operacaoAtual_ElementoTexo
);

for (const btnBotao of btnBotoes) {
    btnBotao.addEventListener("click", () => {
        calcular.acrescentarNumero (btnBotao.innerText);
        calcular.atualizaTela();
    } )
}
for (const botaoOperador of btnOperadores) {
    botaoOperador.addEventListener("click", () => {
        calcular.escolherOperacao(botaoOperador.innerText);
        calcular.atualizaTela();
    })
}


btnDeleteAll.addEventListener("click", () => {
    calcular.clear();
    calcular.atualizaTela();
})
btnIgual.addEventListener("click", () => {
    calcular.calcule();
    calcular.atualizaTela();
})
btnDelete.addEventListener("click", () => {
    calcular.delete();
    calcular.atualizaTela();
})
