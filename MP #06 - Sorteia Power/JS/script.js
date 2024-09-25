/*Sortear */
letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const boxLetras = document.getElementById('sorteadas');
const colorBall = getComputedStyle(span).getPropertyValue('--color');

var cores = ['rgb(1 137 39)', 'rgb(0 77 123)', 'rgb(244 241 100)', 'rgb(247 0 87)'];
var indice = 0;
function sortear() {
    boxLetras.style.display = "flex";

    function choose(letras) {
        var index = Math.floor(Math.random() * letras.length);
        var letra = letras[index];
        return span = document.getElementById('span').innerText = `${letra}`;
    }
    function save() {
        const span = document.createElement('span');
        span.innerText = `${choose(letras)}`;
        span.id = 'caixa-sorteadas';

        const sorteada = document.getElementById('sorteadas');
        sorteada.appendChild(span);

        span.style.backgroundoColors = cores[indice];
        indice = (indice + 1) % cores.length;
    }
    // const colors = () => {
    //     document.body.style.setProperty('--color', cores[Math.floor(Math.random() * cores.length)]);
    // }

    choose(letras);
    save();
    //colors();
}

//console.log(choose(letras));