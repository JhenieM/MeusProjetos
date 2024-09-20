/*Sortear */
letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function sortear() {
    function choose(letras) {
        var index = Math.floor(Math.random() * letras.length);
        var letra = letras[index];
        return span = document.getElementById('span').innerText = `${letra}`;
    }

    choose(letras);
}

//console.log(choose(letras));