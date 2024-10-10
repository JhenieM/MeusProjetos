letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const boxLetras = document.getElementById('sorteadas');
var cores = ['rgb(1 137 39)', 'rgb(0 77 123)', 'rgb(190 186 0)', 'rgb(247 0 87)'];
var indice = 0;

function sortear() {

    /* Reproduzir o áudio */
    const audio = document.getElementById('meuAudio');
    audio.play().catch(function(error) {
        console.error('Erro ao reproduzir o áudio: ', error);
    });

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