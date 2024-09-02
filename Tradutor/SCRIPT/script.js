const selectTag = document.querySelectorAll('select');
const textoTraduzir = document.querySelector('.text-area');

selectTag.forEach((tag, id) => {
        for (const cod_pais in countries) {
                let selected = "";

                if (id == 0) {
                        if (cod_pais == "pt-PT") {
                                selected = "selected";
                        } else {
                                selected = "";
                        }
                } else {
                        if (cod_pais == "es-ES") {
                                selected = "selected";
                        } else {
                                selected = "";
                        }
                }

                let opcao = `<option ${selected} value="${cod_pais}">${countries[cod_pais]}</option>`;
                tag.insertAdjacentHTML("beforeend", opcao);
        }
});

function submit() {
        let text = textoTraduzir.value;
        let traduzirDe = selectTag[0].value;
        let traduzirPara = selectTag[1].value;
        const apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${traduzirDe}|${traduzirPara};`

        fetch(apiURL)
        .then(resposnse => {
                return resposnse.json();
        })
        .then(data => {
                console.log(data);
        })
}

// https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it