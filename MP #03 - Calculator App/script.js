let auxiliar = '0';
let resultado = 0;
let operacao;
const tela = document.querySelector('.box-screen');

function botaoClicado(valor){
if(isNaN(valor)){
    identificarOperacao(valor);
}else{
    identificarNumero(valor);
}
tela.innerText = auxiliar;
}

function identificarOperacao(simbolo){
switch (simbolo){
    case 'C':
        auxiliar = '0';
        resultado = 0;
        break;
    case '=':
        if(operacao === null){
            return
        }
        calculo(parseInt(auxiliar));
            operacao = null;
            auxiliar = resultado;
            resultado = 0;
            break;
    case '←':
        if(auxiliar.length === 1){
            auxiliar = '0';
        }else {
            auxiliar = auxiliar.substring(0, auxiliar.length - 1);
        }
        break;
    case '+':
    case '−':
    case '×':
    case '÷':
        identificarOperacaoMat(simbolo);
        break;
      }   
}     

    function identificarOperacaoMat(simbolo){
        if(auxiliar === '0'){
            return;
        }

    const numero = parseInt(auxiliar);

    if(resultado === 0){
        resultado = numero;
    }else{
        calculo(numero);
    }
    operacao = simbolo;
    auxiliar = '0';
}
    function calculo(numero){
        if(operacao === '+'){
            resultado += numero;
        }else if (operacao === '−'){
            resultado -= numero;
        }else if (operacao === '×'){
            resultado *= numero;
        }else if (operacao === '÷'){
            resultado /= numero;
        }
}

    function identificarNumero(numberCalc){
        if(auxiliar === '0'){
            auxiliar = numberCalc;
        }else {
            auxiliar += numberCalc;
        }
    }
    
    function iniciar(){
        document.querySelector('.box-button-main').addEventListener('click', function(event){
            botaoClicado(event.target.innerText);
        })
    }

    iniciar();


