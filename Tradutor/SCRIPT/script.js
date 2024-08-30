const selectTag = document.querySelectorAll('select');

selectTag.forEach((tag, id) => {
        for (const cod_pais in countries) {
                let selected = id == 0 ? cod_pais == "pt-PT" ? "selected" : "" : cod_pais == "es-ES" ? "selected" : "";
                let opcao = `<option ${selected} value="${cod_pais}">${countries[cod_pais]}</options>`;
                tag.insertAdjacentHTML("beforeend", opcao);
        }
});

function submit() {
        
}


// document.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     submit();
//   }
// });