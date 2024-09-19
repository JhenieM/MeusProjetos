const span = document.getElementById('span');

/*Sortear */
letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function sortear() {
    function choose() {
    var index = Math.floor(Math.random() * letras.length);
    return letras[index];
    }
    
    span.innerText = `letra: ${choose(letras)}`;
}


//console.log(choose(letras));