letras = ['A','B','C','D','E','F','G','I','L','O','P','R','S','T','X','Y'];

const boxLetras = document.getElementById('sorteadas');
var cores = ['rgb(1 137 39)', 'rgb(0 77 123)', 'rgb(190 186 0)', 'rgb(247 0 87)'];
var indice = 0;

function sortear() {
    boxLetras.style.display = "flex";

    //Sortear letras
    function choose(letras) {
        var index = Math.floor(Math.random() * letras.length);
        var letra = letras[index];
        return span = document.getElementById('span').innerText = `${letra}`;
    }

    //Salvar e exibir na tela a letra sortida
    function save() {
        const span = document.createElement('span');
        span.innerText = choose(letras);
        span.classList.add('caixa-sorteadas');

        boxLetras.appendChild(span);

        span.style.border = `20px solid ${cores[indice]}`;
        indice = (indice + 1) % cores.length;
    }

    //Chamando as funções quando o botão for clicado
    choose(letras);
    save();
}