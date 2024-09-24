/*Sortear */
letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const boxLetras = document.getElementById('sorteadas');
const colorBall = getComputedStyle(span).getPropertyValue('--color');

var green = 'rgb(1 137 39)';
var blue = 'rgb(0 77 123)';
var yellow = 'rgb(244 241 100)';
var red = 'rgb(247 0 87)';

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
    }
    function colors() {
        if(colorBall === blue) {
            var hai = document.body.style.setProperty('--color', green);
        }else if (colorBall === green) {
            var hai = document.body.style.setProperty('--color', red);
        }else if (colorBall === red) {
            var hai = document.body.style.setProperty('--color', yellow);
        }else {
            var hai =  document.body.style.setProperty('--color', blue);
        }
        console.log(hai)
    }
    choose(letras);
    save();
    colors();
}

//console.log(choose(letras));