function submit() {
    const numElementos = parseInt(document.getElementById('quantidade').value);
    let colunasPorLinha = 0;
    console.log(numElementos);

  if (Number.isInteger(numElementos) && numElementos > 0) {
    if(numElementos <= 100){
        colunasPorLinha = 10;
    }else if (numElementos >= 200){
        colunasPorLinha = 25;
    }

    const numLinhas = Math.ceil(numElementos / colunasPorLinha);

    const tabela = document.createElement('table');
    const tbody = document.createElement('tbody');
    let capitation = document.createElement('capitalize');

    let elementoAtual = 1;

    capitation.textContent = `${numElementos}`;
    for (let i = 0; i < numLinhas; i++) {
      const linha = document.createElement('tr');

      for (let j = 0; j < colunasPorLinha; j++) {
        if (elementoAtual > numElementos) break;

        const celula = document.createElement('td');
        celula.textContent = `${elementoAtual}`;
        linha.appendChild(celula);
        elementoAtual++;
      }

      tbody.appendChild(linha);
    }

    tabela.appendChild(tbody);

    const tabelaContainer = document.getElementById('tabela');
    tabelaContainer.innerHTML = '';
    tabelaContainer.appendChild(tabela);
  } else {
    alert('Por favor, digite um número inteiro maior que zero.');
  }
}