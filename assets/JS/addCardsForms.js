  // Recupera os dados do Local Storage
  const dadosArmazenados = localStorage.getItem('dadosFormularios');
  const dados = JSON.parse(dadosArmazenados);

  // Verifica se existem dados no Local Storage
  if (dados && dados.length > 0) {
    // Itera sobre os dados e cria os cards
    dados.forEach((dadosFormulario) => {
      const novoCard = document.createElement('div');
      novoCard.classList.add('card', 'cardDynamicCriado');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      // Adiciona os dados ao card
      cardBody.innerHTML = `
        <h5 class="card-title">Nome: ${dadosFormulario.nome}</h5>
        <p class="card-text">Email: ${dadosFormulario.email}</p>
        <p class="card-text">Mensagem: ${dadosFormulario.mensagem}</p>
      `;

      novoCard.appendChild(cardBody);

      // Adiciona o novo card à div de respostas do formulário
      const respostasForm = document.querySelector('.respostasForm');
      respostasForm.appendChild(novoCard);
    });
  } else {
    // Caso não haja dados no Local Storage
    const respostasForm = document.querySelector('.respostasForm');
    respostasForm.textContent = 'Nenhuma requisição do formulário encontrada.';
  }