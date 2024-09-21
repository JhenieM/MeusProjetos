/*Sortear */
letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function sortear() {
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
    choose(letras);
    save();
}

//console.log(choose(letras));